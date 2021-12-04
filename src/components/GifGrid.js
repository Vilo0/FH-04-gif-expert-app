import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
// import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([]);
    const { loading } = useFetchGifs();

    // useEffect(() => {
    //     getGifs(category).then(setImages);
    // }, [category]);

    return (
        <>
            <h3>{ category }</h3>
            { loading ? 'Cargando' : 'Data Cargada' }
            {/* <div className='card-grid'>
                {
                    images.map( image => (
                        <GifGridItem key={image.id} { ...image } />
                    ))
                }
            </div> */}
        </>
    )
}

export default GifGrid
