import { Grid } from "@material-ui/core"
import React from "react"
import duck from "../../assets/duck.png"

export const ContainerDuck = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="space-between"
    >
      <img
        style={{ top: 180, width: 75, position: "absolute" }}
        src={duck}
        className="App-logo"
        alt="logo"
      />
    </Grid>
  )
}
