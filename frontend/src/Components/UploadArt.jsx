import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UploadArt.css";

const UploadArt = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [uploadedArts, setUploadedArts] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Fetch gallery from DB on page load
  useEffect(() => {
    axios
      .get("https://kalakriti-6ov2.onrender.com/gallery")
      .then(res => setUploadedArts(res.data))
      .catch(err => console.error("Error fetching gallery:", err));
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : "");
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first");

    // ✅ Confirmation before uploading
    const confirmUpload = window.confirm(`Are you sure you want to upload "${fileName}"?`);
    if (!confirmUpload) return;

    const formData = new FormData();
    formData.append("art", file);

    try {
      setLoading(true);
      const res = await axios.post("https://kalakriti-6ov2.onrender.com/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      // ✅ Add new upload to top of gallery
      setUploadedArts(prev => [res.data, ...prev]);
      setMessage("Upload successful!");
      setFile(null);
      setFileName("");
    } catch (err) {
      console.error(err);
      setMessage("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Upload Your Artwork</h2>
      <p className="upload-description">
        Showcase your creativity by uploading traditional artwork to the community gallery.
      </p>

      <div className="upload-form">
        <label htmlFor="file-upload" className="custom-file-label">
          Choose File
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <span className="file-name">
          {fileName || "No file selected"}
        </span>
        <button
          className="upload-btn"
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {message && <p className="upload-message">{message}</p>}

      <hr className="upload-separator" />

      <h3 className="gallery-heading">Gallery</h3>
      <div className="gallery">
        {uploadedArts.length > 0 ? (
          uploadedArts.map((art, idx) => (
            <img
              key={idx}
              src={art.imageUrl}
              alt="art"
              className="gallery-img"
            />
          ))
        ) : (
          <p className="empty-gallery">No artwork uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default UploadArt;





