import React, {  } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { obtenerGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( {categoriasArreglo} ) => {

    // const [imagenes, setimagenes] = useState([]);
    const { data:imagenes, loading } = useFetchGifs(categoriasArreglo);


    return (
        <>
            <h4 className='animate__animated animate__bounce animate__delay-2s'>{ categoriasArreglo }</h4>

            { loading && <p>Cargando gifs</p>}


                <div className="cardgrid" >
                    
                
                        {
                            imagenes.map( img => (
                                <GifGridItem 
                                    key = {img.id}
                                    {...img}
                                />
                            ))
                        }
                
                </div>
        </>
    )
}
