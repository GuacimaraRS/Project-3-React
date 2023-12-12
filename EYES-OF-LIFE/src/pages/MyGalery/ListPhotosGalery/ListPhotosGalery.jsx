import React from 'react'
import './ListPhotosGalery.css'
import PhotosGaleryPhotographer from '../PhotosGalery/PhotosGaleryPhotographer'
const ListPhotosGalery = ({photosGalery}) => {
    console.log(photosGalery)
    return (
        <>
            {
                photosGalery.map((photo) => (
                    <PhotosGaleryPhotographer key={photo.id} galeryPhotos={photo} />
                ))
            }
            
        </>
    )
}

export default ListPhotosGalery