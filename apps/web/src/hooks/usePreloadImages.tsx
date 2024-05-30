import { useState } from "react";

const usePreloadImages = () => {

    const [preloadedImages, setPreloadedImages] = useState<HTMLImageElement[]>([]);

    const preloadImages = (imageSource: string) => {
        const imgElem = new Image();
        imgElem.src = imageSource;
        imgElem.onload = () => setPreloadedImages(prev => [...prev, imgElem])
        imgElem.onerror = () => setPreloadedImages(prev => [...prev, imgElem])
    }


    return {
        preloadImages
    }
}

export default usePreloadImages;