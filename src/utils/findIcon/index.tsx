import { makeStyles } from "@material-ui/core"
import React from "react"
import duckBoy from "../../assets/duck1.png"
import duckGirl from "../../assets/duck2.png"
import { Gender } from "../../types/Gender"

const useStyles = makeStyles({
  icon: {
    width: 40,
    transition: ".5s",
  },
  iconChecked: {
    width: 60,
    transition: ".5s",
  },
})

export const useFindIcon = () => {
  const classes = useStyles()
  const findIcon = (gender: Gender, checked?: boolean) => {
    return (
      <span
        role="img"
        aria-label={gender === Gender.BOY ? Gender.BOY : Gender.GIRL}
      >
        <img
          alt="boy duck or girl duck"
          className={checked ? classes.iconChecked : classes.icon}
          src={gender === Gender.BOY ? duckBoy : duckGirl}
        />
      </span>
    )
  }
  return { findIcon }
}
