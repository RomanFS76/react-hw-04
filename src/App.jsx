import { useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchData from "./img-api.js/unsplash";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (searchInput) => {
    try {
      setLoader(true);
      setError(false);
      const response = await fetchData(searchInput);
      setImages(response);
      console.log(response);
    } catch (error) {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} />}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <LoadMoreBtn />
    </>
  );
}

export default App;
