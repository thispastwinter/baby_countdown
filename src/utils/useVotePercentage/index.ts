import { useGetVotes } from "../useGetVotes"

export const useVotePercentage = () => {
  const { boyValue, girlValue } = useGetVotes()
  const boyPercentage = Math.round((boyValue * 100) / (boyValue + girlValue))
  const girlPercentage = Math.round((girlValue * 100) / (boyValue + girlValue))
  return {
    boyPercentage: boyPercentage ? boyPercentage : 0,
    girlPercentage: girlPercentage ? girlPercentage : 0,
  }
}
