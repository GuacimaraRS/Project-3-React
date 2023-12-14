import "./PhotosGaleryPhotographer.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PhotosGaleryPhotographer( { galeryPhotos } ) {

  return (
    <Card sx={{ maxWidth: 345,  }} className="card-container">
    <CardMedia
      sx={{ height: 140 }}
      image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        PATATA BOMBITA
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ES LO QUE HAY
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  
  );
}
