import { useEffect, useState } from "react"

export interface CountDownTime {
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

export const useGetTimeValues = (): CountDownTime => {
  const finalDate = new Date("March 14, 2020 16:00:00").getTime()
  const [time, setTime] = useState<CountDownTime>()
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
    }, 1000)
  }, [finalDate])
  return {
    days: time && time.days,
    hours: time && time.hours,
    minutes: time && time.minutes,
    seconds: time && time.seconds,
  }
}
