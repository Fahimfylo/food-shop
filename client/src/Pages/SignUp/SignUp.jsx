import { Link, redirect, useNavigate } from "react-router-dom";
import formBg from "../../assets/others/authentication.png";
import formImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate()


  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile updated");
          reset()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created Successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Burgs | signUp</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url(${formBg})`,
          backgroundSize: "cover", // Makes the image fit within the div
          backgroundRepeat: "no-repeat", // Prevents tiling
        }}
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <div
          style={{
            backgroundImage: `url(${formBg})`,
            backgroundSize: "cover", // Makes the image fit within the div
            backgroundRepeat: "no-repeat", // Prevents tiling
          }}
          className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl w-full flex"
        >
          <div className="flex-1 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              SignUp
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  className="w-full px-4 py-4 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Type here"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Photo URL
                </label>
                <input
                  {...register("photoURL", { required: true })}
                  type="text"
                  className="w-full px-4 py-4 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Photo URL"
                />
                {errors.PhotoURL && (
                  <span className="text-red-500">Photo URL is required</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  className="w-full px-4 py-4 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Type here"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="password"
                  name="password"
                  className="w-full px-4 py-4 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter your password"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    {" "}
                    Password must be 5 characters{" "}
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">
                    {" "}
                    Password must be less than 20 characters{" "}
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    {" "}
                    Password must have one UpperCase one LowerCase one Digit and
                    One Special Character{" "}
                  </p>
                )}
              </div>
              <div className="form-control">
                <input
                  type="submit"
                  value="SignUp"
                  className="btn text-white bg-orange-300 hover:bg-orange-400 w-full"
                />
              </div>
            </form>
            <div className="mt-4 text-orange-400 text-center">
              <p className="text-base">
                Already registered{" "}
                <Link to="/login">
                  <a className="text-blue-500 font-semibold hover:underline">
                    Go to Login
                  </a>
                </Link>
              </p>
            </div>
            <h1 className="text-center py-5">Or sign up with</h1>
          </div>
          <div
            className="flex-1 bg-center"
            style={{
              backgroundImage: `url(${formImg})`,
              backgroundSize: "contain", // Makes the image fit within the div
              backgroundRepeat: "no-repeat", // Prevents tiling
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
