import { Card, Grid, Typography } from "@material-ui/core"
import React from "react"
import "./styles.css"
import { ContainerDuck } from "../ContainerDuck"

export function App() {
  return (
    <Grid
      container
      className="App"
      direction="column"
      justify="center"
      alignItems="center"
      style={{ marginTop: 24 }}
    >
      <Card
        style={{
          minWidth: 325,
          padding: 75,
          margin: 16,
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
          borderRadius: 8,
          background:
            "linear-gradient(90deg, rgba(213,80,211,1) 21%, rgba(0,255,224,1) 100%)",
        }}
      >
        <ContainerDuck />
      </Card>
      <Grid item>
        <Typography variant="h5">#WhoTheDuckIsIt?</Typography>
      </Grid>
    </Grid>
  )
}
