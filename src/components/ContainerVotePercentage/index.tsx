import { Grid, Typography } from "@material-ui/core"
import React from "react"
import { Names } from "../../types/Names"

interface Props {
  percent: number
  name: Names
  color: string
}

export const ContainerVotePercentage = ({ percent, name, color }: Props) => {
  return percent > 0 ? (
    <Grid
      item
      style={{
        background: color,
        width: `${percent}%`,
      }}
    >
      <Typography
        variant="h4"
        style={{
          paddingTop: 24,
          fontSize: "2rem",
          color: "white",
        }}
      >
        {percent > 9 ? `${percent}%` : null}
        <br></br>
      </Typography>
      <Typography style={{ color: "white" }}>
        {percent > 20
          ? name
          : percent < 20 && percent > 9
          ? `${name.substring(0, 3)}...`
          : null}
      </Typography>
    </Grid>
  ) : null
}
