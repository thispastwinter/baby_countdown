import * as firebase from "firebase/app"
import { useDocument } from "react-firebase-hooks/firestore"

export const useGetVotes = () => {
  const [value] = useDocument(
    firebase.firestore().doc("voteGlobal/A4iNoZqlJQlUOiGMt5JH"),
  )
  const data = value && value.data() && value.data()
  const boyValue = data && data.boy
  const girlValue = data && data.girl
  return { boyValue, girlValue }
}
