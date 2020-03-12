import { Grid, Radio, Typography } from "@material-ui/core"
import React from "react"
import { Gender } from "../../types/Gender"
import { Names } from "../../types/Names"
import { useFindIcon } from "../../utils/findIcon"

interface Props {
  name: Names
  gender: Gender
  hasVoted: boolean
}

export const RadioVote = ({ name, gender, hasVoted }: Props) => {
  const { findIcon } = useFindIcon()
  return hasVoted ? null : (
    <Grid container alignItems="center">
      <Grid item>
        <Radio
          icon={findIcon(gender)}
          checkedIcon={findIcon(gender, true)}
          value={gender}
        />
      </Grid>
      <Grid item>
        <Typography style={{ fontFamily: "Courier New" }}>{name}</Typography>
      </Grid>
    </Grid>
  )
}
