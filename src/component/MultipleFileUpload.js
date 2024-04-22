import React, { useState } from 'react';

const MultipleFileUpload = () => {
  const [files, setFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles(selectedFiles);

    // Display preview of the images
    const previews = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const reader = new FileReader();
      reader.onloadend = () => {
        previews.push(reader.result);
        if (previews.length === selectedFiles.length) {
          setImagePreviews(previews);
        }
      };
      reader.readAsDataURL(selectedFiles[i]);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imagePreviews.map((preview, index) => (
          <div key={index} style={{ width: '200px', height: '200px', border: '1px solid black', margin: '5px', overflow: 'hidden' }}>
            <img src={preview} alt={`Preview ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleFileUpload;
