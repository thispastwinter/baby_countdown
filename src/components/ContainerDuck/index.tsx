import { Grid } from "@material-ui/core"
import React from "react"
import rubberduck from "../../assets/rubber-duck.svg"
import { Clock } from "../Clock"

export const ContainerDuck = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="space-between"
    >
      <Grid item>
        <img
          style={{ padding: 24 }}
          src={rubberduck}
          className="App-logo"
          alt="logo"
        />
      </Grid>
      <Grid item>
        <Clock />
      </Grid>
    </Grid>
  )
}
