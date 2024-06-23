import netflixBgBanner from "../assets/netflix-bg.jpg";

const Gpt = () => {
  return (
    <div className="relative">
      <img
        className="w-screen h-screen object-cover absolute"
        src={netflixBgBanner}
        alt="Background Banner"
      />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 bg-black h-20 w-2/5 flex items-center p-6 rounded-lg justify-center">
        <form className="flex gap-6 w-full">
          <input className="w-4/5 p-2 rounded-lg outline-none" type="text" placeholder="What would you like to watch today?" />
          <button className="text-white bg-red-600 p-2 px-4 rounded-lg grow">Search</button>
        </form>
      </div>
    </div>
  )
}

export default Gpt;