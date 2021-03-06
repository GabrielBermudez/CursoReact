import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if (inputValue.trim().length > 1){
            setCategories( cats => [...cats, inputValue]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value= {inputValue}
                onChange={ handleInputChange }
                placeholder= 'Shaman King'
            />
        </form>
    );
};

export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
