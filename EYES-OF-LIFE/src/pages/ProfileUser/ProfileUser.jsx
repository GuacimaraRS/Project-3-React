
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import { useState, useEffect } from 'react'
import './ProfileUser.css'

import { getProfile,} from '../../services/userService'



const ProfileUser = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getProfile();
        setUser(userData);
        setLoading(false);
      
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Card sx={{width:400, margin:2}}>
      {Object.keys(user).length !== 0 && !loading ? (
        <CardContent className="cardContainer" >
          <CardMedia component="img" height="auto" image={user.user.imagen} alt="" />
          <h3>
            <strong>Name:</strong> {user.user.name_user}
          </h3>
          <h3>
            <strong>Email:</strong> {user.user.email}
          </h3>
          <p>
            <strong>Phone:</strong> {user.user.phone}
          </p>
        </CardContent>
      ) : (
        <h1>Loading</h1>
      )}
    </Card>
  );
};


export default ProfileUser