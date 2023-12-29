import { formatPrice } from "@/utils/formatPrice";
import toast from "react-hot-toast";
import axios from "axios";
import Status from "@/components/Status";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import {
  MdCached,
  MdClose,
  MdDelete,
  MdDone,
  MdRemoveRedEye,
} from "react-icons/md";
import Actions from "@/components/Actions";
import getProducts from "./getProduct";
import firebaseApp from "../libs/firebase-config";

export default function manageProductHelper(products) {
  let rows = [];
  if (products.length > 0) {
    rows = products.map((item) => ({
      id: item.id,
      name: item.name,
      price: formatPrice(item.price),
      category: item.category,
      brand: item.brand,
      inStock: item.inStock,
      desc: item.desc,
      images: item.images,
    }));
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 220,
      renderHeader: (params) => <div className="font-bold text-xl">Id</div>,
    },
    {
      field: "name",
      headerName: "Name",
      width: 220,
      renderHeader: (params) => <div className="font-bold text-xl">Name</div>,
    },

    {
      field: "price",
      headerName: "Price",
      width: 100,
      renderHeader: (params) => <div className="font-bold text-xl">Price</div>,
      renderCell: (params) => {
        return (
          <div className="font-bold text-slate-800 ">{params.row.price}</div>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 100,
      renderHeader: (params) => (
        <div className="font-bold text-xl">Category</div>
      ),
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 120,
      renderHeader: (params) => <div className="font-bold text-xl">Brand</div>,
    },
    {
      field: "inStock",
      renderHeader: (params) => (
        <div className="font-bold text-xl">inStock</div>
      ),
      headerName: "inStock",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            {params.row.inStock === true ? (
              <Status
                text="In Stock"
                icon={MdDone}
                bg="bg-teal-200"
                color="text-teal-700"
              />
            ) : (
              <Status
                text="Out-Of-Stock"
                icon={MdClose}
                bg="bg-rose-200"
                color="text-rose-700"
              />
            )}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      renderHeader: (params) => <div className="font-bold text-xl">Action</div>,
      width: 170,
      renderCell: (params) => {
        return (
          <div className=" flex justify-between w-full gap-4">
            <Actions
              onClick={() => onUpdateHandler(params.row.inStock, params.row.id)}
              icon={MdCached}
            />
            <Actions
              onClick={() => onDeleteHandler(params.row.id, params.row.images)}
              icon={MdDelete}
            />
            <Actions onClick={() => {}} icon={MdRemoveRedEye} />
          </div>
        );
      },
    },
  ];

  const onUpdateHandler = async (inStock, id) => {
    try {
      const { data } = await axios.put(`/api/product`, {
        id,
        inStock: !inStock,
      });
      console.log(data);

      toast.success("Product update success");
    } catch (err) {
      toast.error("Product update failed");
      console.log(err);
    }
  };

  const handleImageDelete = async (images) => {
    try {
      for (const items of images) {
        if (items.image) {
          const storage = getStorage(firebaseApp);
          const imageRef = ref(storage, items.image);
          await deleteObject(imageRef);
          console.log("image deleted");
        }
      }
    } catch (err) {
      toast.success("image delete dailed");
    }
  };

  const onDeleteHandler = async (id, images) => {
    toast.success("Product deleteing please wait.....");

    try {
      await handleImageDelete(images);
      toast.success("image deleted.....");
    } catch (err) {
      toast.success("image deleted failed");
    }

    try {
      const { data } = await axios.delete(`/api/product/${id}`);
      console.log(data);

      toast.success("Product update success");
    } catch (err) {
      toast.error("Product update failed");
      console.log(err);
    }
  };

  return { rows, columns };
}
