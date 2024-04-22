import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // Display preview of the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {imagePreview && (
        <div style={{ width: '200px', height: '200px', border: '1px solid black', overflow: 'hidden' }}>
          <img src={imagePreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
