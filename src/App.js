import "./App.css";
import Header from "./header";
import searchImages from "./api.js";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App">
      <Header
        search={handleSubmit}
        title="Please search for the image you want to search for in English and comprehensively."
      />
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
