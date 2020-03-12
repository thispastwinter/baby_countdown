import * as firebase from "firebase/app"
import { useDocument } from "react-firebase-hooks/firestore"

export const useGetGender = () => {
  const [value] = useDocument(
    firebase.firestore().doc("gender/Iesb7UurpNPpXLMAaFqh"),
  )
  const data = value?.data()
  return { gender: data && Object.values(data)[1] }
}
