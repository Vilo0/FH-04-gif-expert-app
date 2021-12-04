import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick&limit=10&api_key=Ult6O0L8EpsXouxqN8xgxI6hyOsLgVjf';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            };
        });

        console.log(gifs);
        setImages(gifs);
    }

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
