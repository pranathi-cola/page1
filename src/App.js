import React, { useState } from "react";
import "./App.css";
import logo from "./janakalyan_logo.png";
import Uploadlogo from "./upload.png";

const UploadFile = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-body">
      <div className="image-container"><img src={logo}></img></div>
      <div className="business-info">
        <div className="upload-container">
          <div className="credit-automation">Business Credit Automation</div>
          <div className="upload-excel">Upload Excel Files</div>
          <div
            className="drop-zone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <input type="file" id="fileInput" onChange={handleFileChange} hidden />
            <label htmlFor="fileInput" className="drop-label">
              <img className="file-image" src={Uploadlogo}></img>
              <p className="send-files">Send your files here</p>
              <small className="click-drag">Click or Drag and Drop</small>
            </label>
          </div>
          {file && <p className="file-name">Selected: {file.name}</p>}
          <button className="upload-btn">Upload File</button>
        </div>
        </div>
    </div>
  );
};

export default UploadFile;
