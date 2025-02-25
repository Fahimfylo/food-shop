import { useContext, useEffect, useState } from "react";
import formBg from "../../assets/others/authentication.png";
import formImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "User Login Successful!",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
        });
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Burgs | Login</title>
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
          <div
            className="flex-1 bg-center"
            style={{
              backgroundImage: `url(${formImg})`,
              backgroundSize: "contain", // Makes the image fit within the div
              backgroundRepeat: "no-repeat", // Prevents tiling
            }}
          ></div>
          <div className="flex-1 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Login
            </h2>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-4 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Type here"
                />
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-4 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-10">
                <label className="label my-5">
                  <LoadCanvasTemplate></LoadCanvasTemplate>
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  className="w-full px-4 py-4 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Type the captcha"
                />
              </div>
              <div className="form-control">
                {/* TODO : apply disabled for re-captcha */}
                <input
                  disabled={false}
                  type="submit"
                  value="Login"
                  className="btn bg-orange-300 hover:bg-orange-400 w-full"
                />
              </div>
            </form>
            <div className="mt-4 text-orange-400 text-center">
              <p className="text-base">
                New here?
                <Link to="/signup">
                  <a className="text-blue-500 font-semibold hover:underline pl-1">
                    Create a New Account
                  </a>
                </Link>
              </p>
            </div>
            <p className="text-center py-5">Or Sign up with</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
