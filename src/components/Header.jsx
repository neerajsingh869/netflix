import netflixLogo from "../assets/netflix.png";

const Header = () => {
  return (
    <header className="absolute xl:px-40 px-0 py-2 sm:bg-gradient-to-b sm:from-neutral-900 sm:from-10% z-10">
      <img className="lg:w-48 w-32" src={netflixLogo} alt="Netflix Logo" />
    </header>
  )
}

export default Header