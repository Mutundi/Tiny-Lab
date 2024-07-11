import React, {useState} from 'react'

const FileUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if(file && file.type.substr(0, 5) === 'image') {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        } else {
            setSelectedFile(null);
            setPreview(null);
        }
    };

    const handleUpload = () => {
        if(selectedFile) {
            //Upload logic
            //Reset after upload
            setSelectedFile(null);
            setPreview(null);
        }
    };

  return (
    <div className="max-w-md mx-auto mt-8 bg-blue-200 p-10 rounded">
        <div className="mb-4">
            <label
            htmlFor="file-upload"
            className="block text-gray-800 text-sm font-bold mb-4"
            >Choose an image</label>
            <input
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            />
            <label
            htmlFor="file-upload"
            className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Select File</label>
        </div>
        {preview && (
            <div className="mb-4">
                <img src={preview} alt="Preview" className="max-w-full h-auto" />
            </div>
        )}
        <button
        onClick={handleUpload}
        disabled={!selectedFile}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >Upload</button>
    </div>
  )
}

export default FileUploader