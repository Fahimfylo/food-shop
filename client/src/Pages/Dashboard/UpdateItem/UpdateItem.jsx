import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { GiKnifeFork } from "react-icons/gi";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();

  const axiosPublic = useAxiosPublic();

  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with menu url", res.data);
  };

  return (
    <div>
      <SectionTitle
        heading="Update Item"
        subHeading="Refresh info"
      ></SectionTitle>
      <div className="lg:w-[1200px] md:w-[550px] mt-5 p-2 mx-auto bg-slate-200 mb-10">
        <div className="m-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-semibold">
                  Recipe name*
                </span>
              </div>
              <div>
                <input
                  type="text"
                  defaultValue={name}
                  placeholder="Recipe name"
                  {...register("name", { required: true })}
                  className="input w-full text-gray-600"
                />
              </div>
            </div>
            <div className="flex gap-5 my-4">
              {/* category */}
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text text-base font-semibold">
                    Category*
                  </span>
                </div>
                <div>
                  <select
                    defaultValue={category}
                    {...register("category", { required: true })}
                    className="select w-full text-gray-600"
                  >
                    <option disabled value="default">
                      Category
                    </option>
                    <option value="salad">Salad</option>
                    <option value="pizza">Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="dessert">Dessert</option>
                    <option value="drinks">Drinks</option>
                  </select>
                </div>
              </div>

              {/* price */}
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text text-base font-semibold">
                    Price*
                  </span>
                </div>
                <div>
                  <input
                    type="number"
                    defaultValue={price}
                    placeholder="Price"
                    {...register("price", { required: true })}
                    className="input w-full text-gray-600"
                  />
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Recipe Details*
                </span>
              </label>
              <textarea
              defaultValue={recipe}
                {...register("recipe", { required: true })}
                className="textarea text-gray-600 md:h-24 lg:h-40 text-base"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="form-control  md:w-[55%] lg:w-[25%] mt-10 mb-5">
              <input
                {...register("image", { required: true })}
                type="file"
                className="rounded-none file-input bg-transparent"
              />
            </div>
            <button className="btn bg-gradient-to-r from-green-700 to-green-500 p-2 flex text-white font-bold">
              Update Menu Item{" "}
              <span className="pt-1 pl-1">
                <GiKnifeFork />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
