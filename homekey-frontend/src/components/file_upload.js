import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/20/solid";

export function FileUpload() {
  const [file, setFile] = useState(null);

  // Handle the file input change (whether via button or drag-and-drop)
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  // Handle the drop event
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Get the file from the drop event
    const uploadedFile = e.dataTransfer.files[0];
    setFile(uploadedFile);
  };

  // Handle drag over to allow drop
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="col-span-full">
      <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
        Cover photo
      </label>
      <div
        className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragOver} // Optional for better UX
      >
        <div className="text-center">
          <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
          <div className="mt-4 flex text-sm/6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={handleFileChange}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>

      {/* Optional: Display the uploaded file name */}
      {file && (
        <div className="mt-4 text-sm text-gray-600">
          <p>Uploaded file: {file.name}</p>
        </div>
      )}
    </div>
  );
}
