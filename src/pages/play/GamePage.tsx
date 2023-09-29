import {useEffect, useState} from "react";
import {getRandomImage} from "../../api/image-service.ts";
import {TResponseImage} from "../../models/ResponseImage.ts";
import {unmountComponentAtNode} from "react-dom";

const GamePage = () => {

    const [image, setImage] = useState<TResponseImage | null>({});

    useEffect(() => {
        let ignore = false;
        setImage(null)
        getRandomImage().then((response) => {
            setImage(response);
        })
        return () => {
            ignore = true;
        };
    }, []);

    return (
        <div>
            <img src={image?.largeImageURL} alt=""/>
        </div>
    );
};

export default GamePage;
