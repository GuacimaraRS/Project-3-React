import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import { useState, useEffect } from 'react'

import { getProfile } from '../../services/userService'


import React from 'react'
import './ProfileUser.css'


const ProfileUser = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProfile()
      setUser(result)
    }
    fetchData()
    console.log(user)
  }, [])
  return (
    <Card sx={{ maxWidth: 345 }}>


      {Object.keys(user).length !== 0 ?
        <CardContent>
          <CardMedia
            component="img"
            height="140"
            image={user.user.imagen}
            alt=""
          /> 
          <h3>
            <strong>Name:</strong> {user.user.name_user}
          </h3>
          <h3>
            <strong>Email:</strong> {user.user.email}
          </h3>
          <p>
            <strong>Phone:</strong> {user.user.phone}
          </p>
        </CardContent> :
        <h1>
          Loading
        </h1>
      }
    </Card>
  );
}

export default ProfileUser