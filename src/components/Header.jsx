// import Link
import { Link } from "react-router-dom";
// firebase
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";

// import Logo
import Logo from "../assets/img/logo.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    JSON.parse(localStorage.getItem("loggedIn"))
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsLoggedIn(true);
      localStorage.setItem(
        "loggedIn",
        JSON.stringify({
          isLogged: true,
          username: auth?.currentUser?.displayName,
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      localStorage.setItem("loggedIn", false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row gap-6 sm:gap-0">
        {/* Logo */}
        <Link to={"/"}>
          <img src={Logo} alt="logo" />
        </Link>
        {/* Buttons */}
        {!isLoggedIn ? (
          <div className="flex items-center gap-6">
            <Link
              onClick={handleLogin}
              className="hover:text-violet-700 transition"
              to={""}
            >
              Log in
            </Link>
            <Link
              className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition duration-300"
              to={""}
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <p>
              Hi,{" "}
              <span className="text-violet-700">
                {JSON.parse(localStorage.loggedIn).username}
              </span>
            </p>
            <Link
              onClick={handleLogout}
              className="hover:text-violet-700 transition"
              to={""}
            >
              Log out
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
