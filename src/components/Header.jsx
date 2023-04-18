// import Link
import { Link } from "react-router-dom";

// import Logo
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row gap-6 sm:gap-0">
        {/* Logo */}
        <Link to={"/"}>
          <img src={Logo} alt="logo" />
        </Link>
        {/* Buttons */}
        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-700 transition" to={""}>
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition duration-300"
            to={""}
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
