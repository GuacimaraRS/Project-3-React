import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { getProfile } from '../../services/userService'


const ProfileUser = () => {
  const { id } = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProfile(id)
      setUser(result)
    }
    fetchData()
  }, [])

  return (
    <div>
        { Object.keys(user).length !==0 ?
        <>
          <h3>
          <strong>Name:</strong> {user.name_user}
        </h3>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        </> :
        <h1>
          Loading
        </h1>
      }
    </div>
  );
}

export default ProfileUser