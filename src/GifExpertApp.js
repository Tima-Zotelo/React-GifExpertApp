import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['death note']);


    // const handleAdd = () => setCategories(c => [...c, 'Death Note'] );
    // const handleAdd = () => setCategories(c => ['Death Note', ...c] );
    // Agregar al principio

  return (
    <>
        <h1>GifExpertApp</h1>
        <h4>Ingrese nombre de Gif a ingresar: </h4>
        <AddCategory setCategories={ setCategories }/>
        <hr />

        {/* <button onClick={ handleAdd }>
            <span>Agregar</span>
            <div className="liquid"></div>
        </button> */}

        <ol>
            {
                categories.map( category => 
                <GifGrid 
                    key={ category }
                    category={ category }
                 /> )
            }
        </ol>
    </>

  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp;