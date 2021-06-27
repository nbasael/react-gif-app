import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategoria }) => {

    const [ inputValor, setInputValor ] = useState('');

    const inputHandler = e => {        
        setInputValor(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if ( inputValor.trim().length > 2 ) {
            setCategoria( categorias => [ inputValor, ...categorias ]);
            setInputValor('');
        }
    }

    return (
        <form onSubmit={ e => handleSubmit(e) }>
            <input type='text' value={ inputValor } onChange={ e => inputHandler(e) } placeholder="Ingrese algo para su busqueda" />
        </form>
    )
}

AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired
}