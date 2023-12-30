"use client";
import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import Inputs from "../../../components/inputs/Inputs";
import axios from "axios";
import TextAreas from "../../../components/inputs/TextArea";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import CheckBox from "../../../components/inputs/CheckBox";
import { categories } from "../../../utils/categories";
import CategorieInput from "../../../components/CategorieInput";
import { productColors } from "../../../utils/productColor";
import SelectColors from "@/components/SelectColors";
import firebaseApp from "../../../../libs/firebase-config";
import { useRouter } from "next/navigation";
const AddProductForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState("");
  const [isProductCreated, setIsProductCreated] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      desc: "",
      price: "",
      brand: "",
      type: "",
      category: "",
      inStock: false,
      image: [],
    },
  });

  const category = watch("category");
  const setCustomValue = (id, value) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true,
    });
  };

  useEffect(() => {
    setCustomValue("images", images);
  }, [images]);
  useEffect(() => {
    if (isProductCreated) {
      reset();
      setImages(null);
      setIsProductCreated(null);
    }
  }, [isProductCreated]);

  const addImageToState = (value) => {
    setImages((prev) => {
      if (!prev) {
        return [value];
      }

      return [...prev, value];
    });
  };
  const removeImageFromState = (value) => {
    setImages((prev) => {
      if (prev) {
        const fileImage = prev.filter((item) => item.color === value.color);
        return fileImage;
      }

      return prev;
    });
  };

  const onSubmitHandler = async (data) => {
    setIsLoading(true);
    let uploadedImages = [];

    if (!data.category) {
      setIsLoading(false);
      return toast.error("Category is required");
    }
    if (!data.images || data.images.length === 0) {
      setIsLoading(false);
      return toast.error("Image is required");
    }

    const handleImageUpload = async () => {
      toast("Product creating please wait........");

      try {
        for (const items of data.images) {
          if (items.image) {
            const fileName = new Date().getTime() + "-" + items.image.name;
            const storage = getStorage(firebaseApp);
            const storageRef = ref(storage, `images/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, items.image);

            await new Promise((resolve, reject) => {
              uploadTask.on(
                "state_changed",
                (snapshot) => {
                  const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log("Upload is " + progress + "% done");
                  switch (snapshot.state) {
                    case "paused":
                      console.log("Upload is paused");
                      break;
                    case "running":
                      console.log("Upload is running");
                      break;
                  }
                },
                (error) => {
                  console.log("error to upload ", error);
                  reject(error);
                },
                () => {
                  getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                      uploadedImages.push({
                        ...items,
                        image: downloadURL,
                      });

                      console.log("File available at", downloadURL);
                      resolve();
                    })
                    .catch((err) => {
                      reject(err);
                      console.log(err);
                    });
                }
              );
            });
          }
        }
      } catch (err) {
        setIsLoading(false);
        console.log(err);
        return toast.error("image upload failed");
      }
    };

    await handleImageUpload();
    const productsData = { ...data, images: uploadedImages };
    console.log("upload ", productsData);
    //console.log("uploadedImages ", uploadedImages);
    const sendData = {
      name: productsData.name,
      desc: productsData.desc,
      price: productsData.price,
      brand: productsData.brand,
      type: productsData.type,
      category: productsData.category,
      inStock: productsData.inStock,
      images: productsData.images,
    };
    axios
      .post("/api/product", sendData)
      .then((res) => {
        toast.success("product created");
        setIsProductCreated(true);
        console.log(res);
      })
      .catch((err) => toast.error("product upload failed"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <React.Fragment>
      <Heading title="Add Product" center />
      <Inputs
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="text"
        required
      />
      <Inputs
        id="price"
        label="Price"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="number"
      />
      <Inputs
        id="brand"
        label="Brand"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="text"
      />{" "}
      <Inputs
        id="type"
        label="Type"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="text"
      />{" "}
      <TextAreas
        id="desc"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />{" "}
      <CheckBox
        id="stock"
        label="This product in stock"
        disabled={isLoading}
        register={register}
      />
      <div className="w-full font-medium">
        <div className="mb-2 font-semibold">Select a Category</div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 max-h-[50vh] overflow-y-auto">
          {categories.map((item, i) => {
            if (item.label === "All") {
              return null;
            } else {
              return (
                <div key={i} className="col-span">
                  <CategorieInput
                    label={item.label}
                    icon={item.icon}
                    selected={category === item.label}
                    onClick={(category) => setCustomValue("category", category)}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="w-full flex flex-col flex-wrap gap-4">
        <div>
          <div className="font-bold text-slate-700">
            Select The abailable product color and update their image
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {productColors.map((item, i) => (
            <SelectColors
              key={i}
              item={item}
              addImageToState={addImageToState}
              removeImageFromState={removeImageFromState}
              isProductCreated={isProductCreated}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handleSubmit(onSubmitHandler)}
        className="bg-teal-600 px-10 py-2 font-semibold text-white rounded-md w-[140px] hover:scale-105 transition duration-200"
      >
        {isLoading ? "Loading" : "Submit"}
      </button>
    </React.Fragment>
  );
};

export default AddProductForm;
