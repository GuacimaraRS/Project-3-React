import "./PhotosGaleryPhotographer.css";
import { useEffect, useState } from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function PhotosGaleryPhotographer({ galeryPhotos }) {
  useEffect(() => {
    console.log(galeryPhotos)
    const fetchGalery = async () => {
      try {
        
        const { title_image, description, url } = galeryPhotos;
  
        setTitle(title_image);
        setDescription(description);
        setUrl(url);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchGalery();
  }, [galeryPhotos]);  


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  return (
    <Card sx={{ maxWidth: 500 }} className="card-container">
      <CardMedia
        className="photos"
        sx={{  paddingTop: '90%' }}
        image={url}
      />
      <CardContent sx={{ height: 60, width: 500 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Eliminar</Button>
      </CardActions>
    </Card>
  );
};
