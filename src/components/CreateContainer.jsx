import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MdAttachMoney,
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdFoodBank,
} from "react-icons/md";
import { categories } from "../utils/Data";
import Loader from "./Loader";
import { storage } from "../firebase.config";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { saveItem } from "../utils/FirebaseFunctions";

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategories] = useState(null);
  const [imgAssets, setImgAsset] = useState(null);

  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Uploading Images

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFiles = e.target.files[0];
    console.log(imageFiles);
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFiles.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFiles);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error While Uploading: Try Again 🔔");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setImgAsset(downloadUrl);
          setIsLoading(false);
          setFields(true);
          setMsg("Images Uploaded successfully 🥳");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };

  // Deleteing uploaded images
  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imgAssets);
    deleteObject(deleteRef).then(() => {
      setFields(true);
      setImgAsset(null);
      setIsLoading(false);
      setAlertStatus("success");
      setMsg("Image has been successfully deleted 🥳");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };

  // Saving the entered input field

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !price || !imgAssets || !calories || !category) {
        setFields(true);
        setMsg("Required fields can't be empty 😓");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageUrl: imgAssets,
          calories: calories,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data has been successfully added 🥳");
        clearData();
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error While Uploading: Try Again 🔔");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
  };

  // Clear Input fields again

  const clearData = () => {
    setTitle("");
    setImgAsset(null);
    setCalories("");
    setPrice("");
    setCategories("Select Category");
  };

  return (
    <div className="w-full min-h-screen h-auto flex justify-center items-center">
      <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exist={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}
        <div className="w-full p-2 border-b border-gray-300 flex items-center gap-2">
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            required
            value={title}
            placeholder="Give me a title..."
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent h-full text-lg  outline-none border-none placeholder:text-gray-400 text-textColor"
          />
        </div>
        <div className="w-full">
          <select
            onChange={(e) => setCategories(e.target.value)}
            className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
          >
            <option value="other" className="bg-white">
              Select Category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="text-base border-0 outline-none capitalize bg-white text-textColor"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imgAssets ? (
                <>
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                      <p className="text-gray-500 text-3xl hover:text-gray-700">
                        Click here to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="/image*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={imgAssets}
                      alt="uploadImage"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2  border-b border-gray-300 flex items-center gap-2">
            <MdFoodBank className="text-gray-700  text-2xl" />
            <input
              type="text"
              placeholder="Calories"
              required
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
          <div className="w-full py-2  border-b border-gray-300 flex items-center gap-2">
            <MdAttachMoney className="text-gray-700  text-2xl" />
            <input
              type="text"
              placeholder="Price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>
        <div className="flex items-center w-full">
          <button
            type="button"
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold "
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
