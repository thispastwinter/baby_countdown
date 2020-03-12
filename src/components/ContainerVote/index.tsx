import { Button, Grid, RadioGroup, Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { Gender } from "../../types/Gender"
import { Names } from "../../types/Names"
import { useGetTimeValues } from "../../utils/countdown"
import { useUpdateMetaData } from "../../utils/useUpdateMetaData"
import { RadioVote } from "../RadioVote"

export const Vote = () => {
  const initialVotedState = JSON.parse(
    window.localStorage.getItem("hasVoted") as string,
  )
    ? true
    : false
  const [hasVoted, setHasVoted] = useState<boolean>(initialVotedState)
  useEffect(() => {
    window.localStorage.setItem("hasVoted", JSON.stringify(hasVoted))
  }, [hasVoted])
  const [value, setValue] = useState<"" | Gender>("")
  const { handleUpdate } = useUpdateMetaData()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value as Gender)
  }
  const { countdownFinished } = useGetTimeValues()
  return countdownFinished ? null : (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{
        width: 325,
      }}
    >
      {hasVoted ? (
        <Typography style={{ fontFamily: "Courier" }}>
          Thanks for voting!
        </Typography>
      ) : (
        <Typography style={{ fontFamily: "Courier" }}>Vote Below:</Typography>
      )}
      <RadioGroup value={value} onChange={handleChange}>
        <RadioVote
          name={Names.WALTER}
          gender={Gender.BOY}
          hasVoted={hasVoted}
        />
        <RadioVote
          name={Names.LYNNETTE}
          gender={Gender.GIRL}
          hasVoted={hasVoted}
        />
      </RadioGroup>
      {!hasVoted && (
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => value !== "" && handleUpdate(value, setHasVoted)}
        >
          Vote
        </Button>
      )}
    </Grid>
  )
}
