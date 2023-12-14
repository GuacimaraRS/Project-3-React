import React from "react";
import "./ListPhotosGalery.css";
import PhotosGaleryPhotographer from "../PhotosGalery/PhotosGaleryPhotographer";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
const ListPhotosGalery = ({ photosGalery }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      {photosGalery.map((photo) => {
        return (
          
            <Link key={photo.id} to={`/my-galery/${photo.id}`}>
              <PhotosGaleryPhotographer  galeryPhotos={photo} />
            </Link>
          
        );
      })}
    </Box>
  );
};

export default ListPhotosGalery;
