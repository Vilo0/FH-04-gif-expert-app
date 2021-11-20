import React from 'react';

const GifGrid = ({ category }) => {

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
    }

    getGifs();

    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}

export default GifGrid
