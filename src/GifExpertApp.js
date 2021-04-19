import React, { useState } from 'react';
import { AddCategoria } from './componentes/AddCategoria';
import { GifGrid } from './componentes/GifGrid';
// import addCategoria from './src/componentes';


const GifExpertApp = () =>{

    // const categorias = ['One Punch Man', 'Shingeki no kyojin', 'Naruto'];
    const [categorias, setCategorias] = useState(['']);

    // const AgregarCategoria = () =>{
    //     setCategorias([...categorias, 'HunterXHunter']);//Operador ... para anadir a un arreglo constante
    // }


    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategoria setCategorias={ setCategorias } />
            <hr/>

            {/* <button onClick={ AgregarCategoria }>Agregar</button> */}

            <ol>
                {
                    categorias.map( categoriasArreglo => {
                        // return <li key={ categoriasArreglo }> { categoriasArreglo }</li>
                       return  <GifGrid 
                                    key = {categoriasArreglo}
                                    categoriasArreglo = {categoriasArreglo} 
                               />
                    })
                }
            </ol>

        </>
        
        
        
    )

}


export default GifExpertApp;

