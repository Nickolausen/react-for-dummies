import { useEffect, useState } from "react";

/**
 * Custom hook per ottenere le foto dall'API esterna.
 * 
 * @param {string} url 
 * @param {(server: string, id: string, secret: string) => string} pictureUrlFormatter
 */
export default function useFetchPhotos( url, pictureUrlFormatter ) {
    const [ photos, setPhotos ] = useState([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => Promise.all(
                data.photoset.photo.map(async (pic) => {
                    const url = pictureUrlFormatter(pic.server, pic.id, pic.secret)
                    return (
                        <img
                            key={pic.id}
                            className="w-75"
                            src={url}
                            alt={`Photo ${pic.id}`}
                        />
                    );
                })
            ))
            .then((fetchedResult) => setPhotos(fetchedResult))
    }, [ url, pictureUrlFormatter ])

    return photos
}