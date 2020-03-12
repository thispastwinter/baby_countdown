import { useEffect, useState } from "react"

export interface CountDownTime {
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

interface ReturnType extends CountDownTime {
  countdownFinished: boolean
}

export const useGetTimeValues = (): ReturnType => {
  const finalDate = new Date("March 14, 2020 18:15:00").getTime()
  const [time, setTime] = useState<CountDownTime>()
  const [countdownFinished, setCountdownFinished] = useState<boolean>(false)
  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime()
      const timeRemaining = finalDate - now
      setTime({
        days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000),
      })
      if (new Date().getTime() > finalDate) {
        setCountdownFinished(true)
      }
    }, 10)
  }, [finalDate])

  return {
    days: time?.days,
    hours: time?.hours,
    minutes: time?.minutes,
    seconds: time?.seconds,
    countdownFinished,
  }
}
