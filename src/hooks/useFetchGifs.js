// un hook es una funcion
// no es jsx porque no retorna un codigo html, la unica diferencia con los functional components
// retorna cosas de funciones

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async( category ) => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages(category);
    }, [] )

    return {
        images, // es equivalente a poner images: images,
        isLoading  // isLoading: isLoading
    } 
}
