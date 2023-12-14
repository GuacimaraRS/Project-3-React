import  {useState, useEffect } from 'react'
import './MyGalery.css'

import { getPhotosGaleryPhotographer } from '../../services/getPhotosGaleryPhotographer';
import ListPhotosGalery from './ListPhotosGalery/ListPhotosGalery';

const MyGalery = () => {
  const [photosGaleryPhotographer, setPhotosGaleryPhotographer] = useState([])
  useEffect(() => {
    const fetchPhotosGaleryPhotographer = async () => {
      try {
          const result = await getPhotosGaleryPhotographer()
          setPhotosGaleryPhotographer(result)
      } catch (error) {
        console.error(error.message)
      }
    }
    fetchPhotosGaleryPhotographer()
  },[])
console.log(photosGaleryPhotographer)


  return (<>
    <div className='title'>MyGalery</div>
    <ListPhotosGalery photosGalery={photosGaleryPhotographer} />
   </>
  )
}

export default MyGalery