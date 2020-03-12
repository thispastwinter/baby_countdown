import * as firebase from "firebase/app"
import { GlobalVote } from "../../types/GlobalVote"
import { useGetVotes } from "../useGetVotes"

export const useUpdateMetaData = () => {
  const { boyValue, girlValue } = useGetVotes()
  const updateMetaData = async (
    boy: GlobalVote["boy"],
    girl: GlobalVote["girl"],
  ) => {
    const db = firebase.firestore()
    try {
      const result = await db
        .collection("voteGlobal")
        .doc("A4iNoZqlJQlUOiGMt5JH")
      return result.update({ girl, boy })
    } catch (error) {
      console.log("Unable to create document: ", error)
    }
    return undefined
  }
  const handleUpdate = (gender: "boy" | "girl", setHasVoted: Function) => {
    gender === "boy"
      ? updateMetaData(boyValue + 1, girlValue)
      : updateMetaData(boyValue, girlValue + 1)
    setHasVoted(true)
  }
  return { updateMetaData, handleUpdate }
}
