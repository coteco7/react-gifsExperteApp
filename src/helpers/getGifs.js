export const obtenerGif = async( categoriasArreglo ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoriasArreglo)  }&limit=10&api_key=cC9iSkChkeJbhrptC3O3LGSZai4xg3l8`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

} 