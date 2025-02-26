import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo)
      .then((res) => {
        console.log(res.data);
        navigate('/')
      });
    });
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleGoogleSignIn}
        className="border border-gray-400 rounded-full p-3"
      >
        <FaGoogle size={18}></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
