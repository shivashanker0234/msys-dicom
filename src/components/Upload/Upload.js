import React, { useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";

const DicomUploader = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);
    setFileName(file.name); // Set the file name when a file is added
  };

  const uploadToServer = async () => {
    if (uploadedFile) {
      const formData = new FormData();
      formData.append("file", uploadedFile);

      axios
        .post("http://172.30.44.182:8042/instances", formData, {
          "Access-Control-Allow-Origin": "*",
        })
        .then((res) => {
          setSuccessMessage("DICOM file uploaded successfully!");
          setFileName(""); // Clear file name after successful upload
        })
        .catch((err) => {
          setErrorMessage("Error uploading DICOM file. Please try again.");
        });
    } else {
      setErrorMessage("Please select a DICOM file first.");
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">DICOM File Uploader</h2>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center cursor-pointer"
          >
            <input {...getInputProps()} />
            <p>
              Drag 'n' drop a .zip or .dcm file here, or click to select one
            </p>
            {fileName && (
              <p className="text-gray-600 mt-4">File added: {fileName}</p>
            )}
          </div>
        )}
      </Dropzone>
      <div className="flex justify-center mt-4">
        <button
          onClick={uploadToServer}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Upload to Server
        </button>
      </div>
      {errorMessage && <div className="text-red-600 mt-4">{errorMessage}</div>}
      {successMessage && (
        <div className="text-green-600 mt-4">{successMessage}</div>
      )}
    </div>
  );
};

export default DicomUploader;
