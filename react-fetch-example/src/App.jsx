import { useEffect, useState } from "react";
import { QUERY_URL, PICTURES_URL } from "./secrets";
import Footer from "./Footer";

const getMeta = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = url;
  });
};

function Gallery({ pictures }) {
  return (
    <div className="container-fluid">
      <div className="row">
        {pictures.map((img) => (
          <div key={img.key} className="py-4 col-12 col-md-6 col-lg-4 col-xl-2">
            {img}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch(QUERY_URL, { mode: "cors", method: "GET" });
        const data = await res.json();
        const fetchedResult = await Promise.all(
          data.photoset.photo.map(async (pic) => {
            const url = PICTURES_URL(pic.server, pic.id, pic.secret);
            await getMeta(url); // Ensure the image is preloaded
            return (
              <img
                key={pic.id}
                className="w-75"
                src={url}
                alt={`Photo ${pic.id}`}
              />
            );
          })
        );
        setPhotos(fetchedResult); // Update state after all images are processed
      } catch (err) {
        console.error("Error fetching photos:", err);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <>
      <h1 className="display-1 text-center pt-5">Galleria</h1>
      <Gallery pictures={photos} />
      <Footer/>
    </>
  );
}

export default App;