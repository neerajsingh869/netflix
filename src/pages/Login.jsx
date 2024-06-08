import Header from "../components/Header";

const Login = () => {
  return (
    <div className="relative">
      <Header />
      <img
        className="w-screen h-screen object-cover absolute"
        src="../src/assets/netflix-bg.jpg"
        alt="Background Banner"
      />
      <div className="absolute h-screen w-screen">
        <div className="bg-black/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-16 flex justify-center align-center flex-col rounded-md">
          <p className="text-white text-4xl mb-12 font-bold">Sign In</p>
          <form className="w-80 flex flex-col gap-5 mb-12">
            <input
              className="focus:ring focus:ring-white p-3 text-lg outline-none bg-neutral-600 placeholder:text-neutral-400 text-white rounded-md"
              type="email"
              placeholder="Email"
            />
            <input
              className="focus:ring focus:ring-white p-3 text-lg outline-none bg-neutral-600 placeholder:text-neutral-400 text-white rounded-md"
              type="password"
              placeholder="Password"
            />
            <button className="text-white bg-red-600 text-lg p-3 hover:bg-red-700 rounded-md" type="button">
              Sign In
            </button>
          </form>
          <div>
            <p className="text-white">
              <span className="text-neutral-300">New to Netflix?</span> <span className="text-lg cursor-pointer hover:underline font-bold">Sign up now</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
