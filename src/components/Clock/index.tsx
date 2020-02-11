import { CircularProgress, Grid, makeStyles } from "@material-ui/core"
import React from "react"
import { useGetTimeValues } from "../../utils/countdown"
import "./index.scss"

const useStyles = makeStyles({
  clock: {
    minWidth: 200,
    borderRadius: 5,
    letterSpacing: 4,
    lineHeight: 0,
    fontSize: "1.25rem",
    color: "#fff",
    background: "rgba(0, 0, 0, 0.3)",
  },
})

export const Clock = () => {
  const classes = useStyles()
  const { days, hours, minutes, seconds } = useGetTimeValues()
  return (
    <Grid container direction="row" justify="center" className={classes.clock}>
      {days ? (
        <p>
          {days}:{hours}:{minutes}:{seconds}
        </p>
      ) : (
        <CircularProgress color="secondary" />
      )}
    </Grid>
  )
}
