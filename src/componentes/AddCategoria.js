import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategoria = ({ setCategorias }) =>{

    const [valorInput, setvalorInput] = useState('');

    const inputValor = ( e ) => {   // funcion para poder tomar el valor que se ingresa al input
          setvalorInput( e.target.value );
    }

    const pressEnter = (e) => {
        e.preventDefault();

        if (valorInput.trim().length > 2) {
            setCategorias(categorias => [ valorInput, ...categorias  ] );
            setvalorInput('');

        }

        

        // console.log('Enter presionado');

    }

    return(
            
            <form onSubmit= { pressEnter }>
                <input 
                    value={ valorInput } 
                    type="text" 
                    onChange={ inputValor } 
                />
            </form>
            
        
    )
}


AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired // funcion requerida setCategorias 
}


