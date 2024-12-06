import { PhotoIcon } from "@heroicons/react/20/solid";

export function FileUpload({ file, onFileUploaded }) {
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (onFileUploaded) {
      onFileUploaded(uploadedFile);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const uploadedFile = e.dataTransfer.files[0];
    if (onFileUploaded) {
      onFileUploaded(uploadedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="col-span-full m-2">
      <label htmlFor="cover-photo" className="block text-gray-900 dark:text-white text-sm font-medium">
        Property Photo
      </label>
      <div
        className="mt-2 flex justify-center bg-white dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 px-6 py-10"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragOver}
      >
        <div className="text-center">
          <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-500" />
          <div className="mt-4 flex text-sm text-gray-600 dark:text-gray-300">
            <label
              htmlFor="document"
              className="relative cursor-pointer rounded-md bg-white dark:bg-gray-800 font-semibold text-indigo-600 dark:text-indigo-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 dark:focus-within:ring-indigo-400 focus-within:ring-offset-2 hover:text-indigo-500 dark:hover:text-indigo-400"
            >
              <span>Upload a file</span>
              <input id="document" name="document" type="file" className="hidden" onChange={handleFileChange} />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>

      {file && (
        <div className="mt-4 text-sm text-gray-900 dark:text-white">
          <p>Uploaded file: {file.name}</p>
        </div>
      )}
    </div>
  );
}
