import { useState, useEffect } from 'react';
import { getPhotosGaleryPhotographer } from '../../../services/getPhotosGaleryPhotographer';
import { Link, useNavigate } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import './GaleryPhotographer.css'


const GaleryPhotographer = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const result = await getPhotosGaleryPhotographer();
                console.log('Resultado de las fotos:', result);
                setPhotos(result);

            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, []);
    const navigate = useNavigate();

    const handleGaleryClick = (photographer) => {
        navigate(`/photographers/${photographer}/galery`);
    };

    const handleReservaClick = (photographer) => {
        navigate(`/photographers/${photographer}/reservar`);
    };

    const handleEventClick = (photographer) => {
        navigate(`/photographers/${photographer}/event`);
    };


    return (
        <>
            <div>
                <h1 className='h1'>Galeria</h1>
                <div className="button-containerGalery">
                    <button className="button-PhotoGrapher2" onClick={handleGaleryClick}>Galeria</button> 
                    <button className="button-PhotoGrapher2" onClick={handleEventClick}>Eventos</button>
                    <button className="button-PhotoGrapher2" onClick={handleReservaClick}>Reservar</button>
                    <Link className="button-Back2" to="#" onClick={() => window.history.back()}>Volver</Link>
                </div>
            </div>
            {Array.isArray(photos.message) && photos.message.length > 0 ? (
                <div className="photo-grid">
                    {photos.message.map((photo) => (
                       <Card key={photo.id} className="photo-item">
                       <CardMedia
                           component="img"
                           alt={`Photo ${photo.id}`}
                           image={photo.url}
                       />
                   </Card>
                    ))}
                </div>
            ) : (
                <p>No hay fotos disponibles.</p>
            )}

        </>
    );
};

export default GaleryPhotographer;
