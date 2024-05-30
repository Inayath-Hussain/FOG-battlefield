import { useEffect, useState } from "react";
import usePreloadImages from "../hooks/usePreloadImages";
import { getAllMenuItemsService, IMenuItem } from "../services/quickmatch/getAllMenuItems";
import { ApiError } from "../services/error";
import MenuDetails from "./MenuDetails";

const MenuDetailsContainer = () => {
    const [data, setData] = useState<IMenuItem[]>([]);
    // const [preloadedImg, setPreloadedImages] = useState<HTMLImageElement[]>([]);

    const [show, setShow] = useState(false);

    const { preloadImages } = usePreloadImages();

    useEffect(() => {
        const call = async () => {
            const result = await getAllMenuItemsService();

            if (result instanceof ApiError) return alert(result.message);

            // const dataWithLoadedImages = await Promise.all(
            //     result.map(item =>
            //         new Promise<HTMLImageElement>(resolve => {
            //             const imgElem = new Image();
            //             imgElem.src = item.coverImage;
            //             imgElem.onload = () => resolve(imgElem)
            //             imgElem.onerror = () => resolve(imgElem)
            //         })
            //     )
            // )

            // setPreloadedImages(dataWithLoadedImages)

            result.forEach(item => {
                preloadImages(item.coverImage)
            })

            setData(result)
        }

        call()
    }, []);

    return (
        <div>

            <button onClick={() => setShow(prev => !prev)}>Show</button>

            {/* <div className={show ? "block" : "hidden"}>
                {data.map(d => (
                    <div className="my-6">
                        <p>{d.name}</p>
                        <img src={d.coverImage} alt="" />
                    </div>
                ))
                }
            </div> */}



            {
                show ?
                    <MenuDetails data={data} />
                    :
                    null
            }


        </div>
    );
}

export default MenuDetailsContainer;