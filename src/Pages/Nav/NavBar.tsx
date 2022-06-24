import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
type Props = {};

const NavBar = () => {
  const [navScroll, setNavScroll] = useState(false);
    //console.log(navScroll);
    
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <>
      <nav className={`nav__bar ${navScroll && "nav__black"}`}>
        <div className="nav__content">
            <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
            className="nav__logo"
          ></img>
          </Link>
          <Link to="/profile">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
            alt=""
            className="nav__avatar"
          ></img>
           </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
