import { useEffect, useState } from "react";
import { QUERY_URL, PICTURES_URL } from "./secrets";
import Footer from "./Footer";

function Gallery({ pictures }) {
  return (
    <div className="container-fluid">
      <div className="row">
        {
          pictures.map((img) => (
            <div key={img.key} className="text-center py-4 col-12 col-md-6 col-lg-4 col-xl-2">
              {img}
            </div>
          ))
        }
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
        // Update state after all images are processed
        setPhotos(fetchedResult);
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