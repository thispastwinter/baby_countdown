import { Card, Grid, Typography } from "@material-ui/core"
import React, { ReactNode } from "react"
import duck from "../../assets/duck2.png"
import { Names } from "../../types/Names"
import { useGetTimeValues } from "../../utils/countdown"
import { useGetGender } from "../../utils/useGetGender"
import { useVotePercentage } from "../../utils/useVotePercentage"
import { Clock } from "../Clock"
import { ContainerVotePercentage } from "../ContainerVotePercentage"

interface Props {
  children: ReactNode
}

export const CardVotePercentage = ({ children }: Props) => {
  const { girlPercentage, boyPercentage } = useVotePercentage()
  const { countdownFinished } = useGetTimeValues()
  const { gender } = useGetGender()
  return countdownFinished && gender ? (
    <>
      <Typography
        style={{ color: "#d64fd4", paddingBottom: 24 }}
        variant="h2"
      >{`It's ${gender}!`}</Typography>
      <img height={400} src={duck} alt={`${gender}_Duck`} />
    </>
  ) : (
    <Card
      style={{
        width: 325,
        height: 325,
        padding: 0,
        margin: 16,
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
        borderRadius: 8,
      }}
    >
      <Grid container style={{ height: "100%" }} direction="row" wrap="wrap">
        <ContainerVotePercentage
          percent={girlPercentage}
          name={Names.LYNNETTE}
          color="rgba(213,80,211,1)"
        />
        <ContainerVotePercentage
          percent={boyPercentage}
          name={Names.WALTER}
          color="rgba(0,255,224,1)"
        />
        <Clock />
      </Grid>

      {children}
    </Card>
  )
}
