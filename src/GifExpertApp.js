import React, { useState } from 'react';
import { AddCategory } from './components/addCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [ categorias, setCategorias ] = useState([]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategoria={ setCategorias }/>
            <hr />
            <ol>
            {
                categorias.map( categoria => <GifGrid key={ categoria } categoria={ categoria } /> )
            }
            </ol>
        </>
    );
};
