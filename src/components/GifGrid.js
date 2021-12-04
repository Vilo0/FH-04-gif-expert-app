import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(setImages);
    }, [category]);

    return (
        <>
            <h3>{ category }</h3>
            <div className='card-grid'>
                {
                    images.map( image => (
                        <GifGridItem key={image.id} { ...image } />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid
