import { Grid, makeStyles } from "@material-ui/core"
import React from "react"
import { useGetTimeValues } from "../../utils/countdown"

const useStyles = makeStyles({
  clock: {
    maxWidth: 325,
    lineHeight: 0,
    fontFamily: "Subway-Ticker",
    fontSize: "3.5rem",
    color: "#fff",
    background: "rgba(0, 0, 0, 0.3)",
  },
})

export const Clock = () => {
  const classes = useStyles()
  const { days, hours, minutes, seconds } = useGetTimeValues()
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.clock}
    >
      <p>
        {days}:{hours}:{minutes}:{seconds}
      </p>
    </Grid>
  )
}
