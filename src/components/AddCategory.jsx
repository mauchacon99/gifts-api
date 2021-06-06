import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [InputValue, setInputValue ] = useState('')

    const handleInputValue= (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(InputValue.trim().length > 2) 
        setInputValue('')
        setCategories(cat => [InputValue,...cat])
        
    }
    return (
        <>
            <form  onSubmit={handleSubmit}  className="relative mx-5">
                <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <path    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
                <input onChange={ handleInputValue} className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Filter projects" placeholder="Categories" />
            </form>
        </>  
         
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;