import { useState, useEffect } from 'react'
import { obtenerGif } from '../helpers/getGifs';

export const useFetchGifs = ( categoriasArreglo ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    
    useEffect(() =>{
        obtenerGif( categoriasArreglo )
        .then(imgs =>{

            setTimeout(() => {

                console.log(imgs);
                setstate({
                    data: imgs,
                    loading: false
                }); 
            }, 3000);

            
            
        }) 

    }, [ categoriasArreglo ])


    return state;

}
