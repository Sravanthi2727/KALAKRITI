import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then(res => res.json())
      .then(data => {
        setImages(data.images || []);
      })
      .catch(err => {
        console.error("Failed to load gallery:", err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h3>Artwork Gallery</h3>
      <div className="row">
        {images.length === 0 && <p>No artworks uploaded yet.</p>}
        {images.map((url, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <img
              src={url}
              alt={`Art ${index + 1}`}
              className="img-fluid img-thumbnail"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
