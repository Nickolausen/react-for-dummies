import { useMemo } from "react";
import { QUERY_URL, PICTURES_URL } from "./secrets";
import Footer from "./Footer";
import useFetchPhotos from "./custom-hooks/useFetchPhotos"

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
  const photos = useFetchPhotos(QUERY_URL, PICTURES_URL)
  return (
    <>
      <h1 className="display-1 text-center pt-5">Galleria</h1>
      <Gallery pictures={photos} />
      <Footer/>
    </>
  );
}

export default App;