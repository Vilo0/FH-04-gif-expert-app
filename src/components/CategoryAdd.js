import { useState } from 'react'

const CategoryAdd = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo');

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

export default CategoryAdd;

