import { Grid, Typography } from "@material-ui/core"
import React from "react"
import "./styles.css"
import { CardVotePercentage } from "../CardVotePercentage"
import { ContainerDuck } from "../ContainerDuck"
import { Vote } from "../ContainerVote"

export function App() {
  return (
    <>
      <Grid
        container
        className="App"
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography
            style={{ paddingTop: 24, fontFamily: "Roboto" }}
            variant="h6"
          >
            #WhoTheDuckIsIt
          </Typography>
        </Grid>
        <CardVotePercentage>
          <ContainerDuck />
        </CardVotePercentage>
        <Grid item>
          <Vote />
        </Grid>
      </Grid>
    </>
  )
}
