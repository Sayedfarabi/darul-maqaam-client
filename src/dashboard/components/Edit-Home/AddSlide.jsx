import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

const AddSlide = () => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    const imagesObjectArray = imagesArray.map((imageURL) => {
      return {
        imageURL,
      };
    });
    setImages(imagesObjectArray);
    setSelectedImages((previousImages) => previousImages?.concat(imagesArray));
    event.target.value = "";
  };

  console.log(images);

  return (
    <div>
      <div>
        {selectedImages.map((i) => {
          return (
            <div key={i}>
              <img src={i} alt="" className="w-48 max-h-48  mx-auto p-4 border border-gray-300 rounded-md"></img>
            </div>
          );
        })}
      </div>
      <div className="mx-auto">
       {
        !selectedImages.length > 0 &&
        <div className="py-6 md:py-8" id="cropper">
        <label className="mx-auto flex flex-col justify-center items-center border border-green-500 text-green-600 rounded-md w-20 h-20 md:w-48 md:h-12 text-center cursor-pointer text-base md:text-xl font-medium">
          + Add Images
          <br />
          <input
            onChange={onSelectFile}
            type="file"
            name="images"
            accept="image/png , image/jpeg, image/webp"
            className="hidden"
          />
        </label>
      </div>
       }

        {selectedImages.length > 0 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setSelectedImages([])}
              className="btn text-sm text-red-500 capitalize btn-sm border-none hover:border hover:border-red-400 rounded-md mx-4"
            >
              Cancel
            </button>
            <button
              onClick={() => alert("Coming soon this feature...")}
              className="btn text-sm bg-green-400 hover:bg-green-600 text-white text-white-500 capitalize btn-sm duration-500  rounded-md mx-4 font-normal"
            >
              Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddSlide;
