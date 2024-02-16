
//la extension depende de que devuelve

import { useEffect, useState } from "react";
import { getGifs } from "../helpres/getGifs";

//hooks es una funcion
export const useFetchGifs = (categoria) => {
    
    const [images, setImages] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const getImages = async()=>{
        const newImages = await getGifs(categoria);
        setImages(newImages);
        setIsLoading(false);
    };
    
    useEffect(()=>{
        getImages();
    }, []);
    

    return {
        images,//images: images, -> variable con mismo nombre propiedad
        isLoading,
    }
}
