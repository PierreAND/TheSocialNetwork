import APIManager from "../api/axios"
import { useAtom } from "jotai"
import { userAtom } from "../../store"


function Profile() {

const [userData] = useAtom(userAtom)

  return (
    <div>Profile</div>
  )
}

export default Profile