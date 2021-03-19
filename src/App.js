import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Model from "./comps/Model";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm></UploadForm>
      <ImageGrid setSelectedImg={setSelectedImg}></ImageGrid>
      {selectedImg && (
        <Model
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        ></Model>
      )}
    </div>
  );
}

export default App;
