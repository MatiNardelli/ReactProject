//.js porque es puro javaScript

export const getGifs = async(categoria) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=SHrzO3Xq9dCeQIBZSwfJkzXUyQ3RxhL6&q=${categoria}&limit=5`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    // console.log(gifs);
    return gifs;
}
