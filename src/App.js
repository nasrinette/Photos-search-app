import SearchBar from "./components/SearchBar"; 
import searchImages from "./api";
import ImageList from "./components/ImageList";
import React, { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
    const handleSubmit = async(term)=>{
      // wait for images request to scryRenderedComponentsWithType, then print out the result
        const result = await searchImages(term);

        setImages(result);
    }
  return (
    <div className="App">
      <SearchBar onSubmit = {handleSubmit} />
      <ImageList images = {images} />
    </div>
  );
}

export default App;