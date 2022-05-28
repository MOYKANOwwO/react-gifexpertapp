

export const getGifs = async(category) => {
    //Quita los espacios
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=SbEkstNCPi7CB8jlOju2oMPv1ED3laEl`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
            }
        })

    return gifs;
}




