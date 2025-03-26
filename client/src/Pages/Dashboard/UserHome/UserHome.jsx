import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div className="mx-auto text-center mt-20">
      <h2 className="text-3xl">
        <span>Hi, Welcome to user Home </span>
        <span className="text-blue-500 font-semibold">{user?.displayName ? user.displayName : "Back"}</span>
      </h2>
    </div>
  );
};

export default UserHome;
