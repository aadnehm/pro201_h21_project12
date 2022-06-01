import React, { useEffect, useRef, useState } from "react";
import "./menu.css";

//Icons
import Hamburger from "hamburger-react";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Menu() {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          ref.current.lastChild.style.visibility = "hidden";
          closeMenu();
        } else {
          ref.current.lastChild.style.visibility = "visible";
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div>
      <nav className="menu">
        <div ref={wrapperRef}>
          <button onClick={handleToggle}>
            <div className="buttonSymbol">
              <Hamburger
                direction="right"
                toggled={navbarOpen}
                toggle={setNavbarOpen}
                size={28}
              />
            </div>
            <div className="personIcon buttonSymbol">
              <img
                src="/img/companies/company-f5.png"
                alt="profil-img"
                width={24}
              />
            </div>
          </button>
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <div>
              <div className="menuDiv">
                <a href="/" onClick={() => closeMenu()}>
                  <li>My page</li>
                </a>
                <a href="/" onClick={() => closeMenu()}>
                  <li>Donations</li>
                </a>
                <a href="/" onClick={() => closeMenu()}>
                  <li>Social media</li>
                </a>
                <a href="/" onClick={() => closeMenu()}>
                  <li>Insights</li>
                </a>
                <a href="/" onClick={() => closeMenu()}>
                  <li>Favorites</li>
                </a>
              </div>
              <div className="solid"></div>
              <div className="menuDiv">
                <a href="/" onClick={() => closeMenu()}>
                  <li>Privacy</li>
                </a>
                <a href="/" onClick={() => closeMenu()}>
                  <li>Contact us</li>
                </a>
                <a href="/" onClick={() => closeMenu()}>
                  <li>Notifications</li>
                </a>
                <a href="/" onClick={() => closeMenu()}>
                  <li>
                    <span>
                      <LogoutIcon className="logoutBtn" fontSize="small" />
                    </span>
                    Sign out
                  </li>
                </a>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
