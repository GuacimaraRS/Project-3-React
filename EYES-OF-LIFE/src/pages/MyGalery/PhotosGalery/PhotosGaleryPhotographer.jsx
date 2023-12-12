import "./PhotosGaleryPhotographer.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PhotosGaleryPhotographer( { galeryPhotos } ) {

  return (
    <Card sx={{ maxWidth: 345, }} className="card-galery">
      <CardMedia
        sx={{ height: 140 }}
        image="https://album.mediaset.es/eimg/2018/07/25/dfeYZpZjf7nuiELacKuPw7.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        dasdadasd
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
