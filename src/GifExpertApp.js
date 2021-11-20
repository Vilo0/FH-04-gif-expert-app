import { useState } from 'react';
import CategoryAdd from './components/CategoryAdd';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch', 'Luffy', 'Naruto']);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Hunterx']);
    //     setCategories(cats => [...cats, 'Hunterx']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd />
            <hr />

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

