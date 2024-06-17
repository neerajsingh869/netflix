import { Link } from "react-router-dom";
import netflixLogo from "../assets/netflix.png";
import pageNotFoundLogo from "../assets/page-not-found.png";

const Page404 = () => {
  return (
    <div>
      <div className="fixed z-50 bg-black h-16 w-screen flex items-center px-10">
        <Link to="/"><img className="w-32" src={netflixLogo} alt="Netflix Logo" /></Link>
      </div>
      <div className="relative">
        <img
          className="w-screen h-screen object-cover absolute"
          src={pageNotFoundLogo}
          alt="Page not found Banner"
        />
        <div className="text-white pt-16 absolute flex items-center justify-center h-screen w-screen">
          <div className="flex items-center justify-center flex-col gap-4 w-full md:w-2/3 h-full" style={{
            background: "radial-gradient(circle, rgba(2,0,36,0.6475840336134453) 0%, rgba(0,0,0,0) 70%)"
          }}>
            <p className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl mb-4 font-bold text-center">Lost your way?</p>
            <p className="text-base sm:text-lg w-2/3 md:text-xl xl:text-xl 2xl:text-2xl md:w-2/3 text-center">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.</p>
            <button type="button" className="bg-white font-bold text-black w-32 h-9 rounded-lg flex items-center justify-center text-sm md:text-base xl:text-lg xl:w-36 xl:h-10 2xl:text-lg 2xl:w-40 2xl:h-12 hover:bg-white/80">
              <Link to="/">Netflix Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page404