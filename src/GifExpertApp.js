import { useState } from 'react';

const GifExpertApp = () => {

    // const categories = ['One punch', 'Luffy', 'Naruto'];
    const [categories, setCategories] = useState(['One punch', 'Luffy', 'Naruto']);

    const handleAdd = () => {
        // setCategories([...categories, 'Hunterx']);
        setCategories(cats => [...cats, 'Hunterx']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map(category =>
                        <li key={category}>{category}</li>
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp;

