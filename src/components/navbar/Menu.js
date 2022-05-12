import React, { useState } from "react";
import "./Menu.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

//Icons
import HomeIcon from "@mui/icons-material/Home";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ShareIcon from "@mui/icons-material/Share";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SecurityIcon from "@mui/icons-material/Security";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Menu() {
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <div>
      <nav className="menu">
        <div>
          <button onClick={handleToggle}>
            {navbarOpen ? (
              <MdClose
                style={{ color: "#000", width: "40px", height: "40px" }}
              />
            ) : (
              <FiMenu
                style={{ color: "#000", width: "40px", height: "40px" }}
              />
            )}
          </button>
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <a href="/" onClick={() => closeMenu()}>
              <li>
                <span>
                  <HomeIcon />
                </span>
                My page
              </li>
            </a>
            <a href="/" onClick={() => closeMenu()}>
              <li>
                <span>
                  <VolunteerActivismIcon />
                </span>
                Donations
              </li>
            </a>
            <a href="/" onClick={() => closeMenu()}>
              <li>
                <span>
                  <ShareIcon />
                </span>
                Social media
              </li>
            </a>
            <a href="/" onClick={() => closeMenu()}>
              <li>
                <span>
                  <InfoIcon />
                </span>
                Insights
              </li>
            </a>
            <a href="/" onClick={() => closeMenu()}>
              <li>
                <span>
                  <FavoriteIcon />
                </span>
                Favorites
              </li>
            </a>
            <hr className="solid"></hr>
            <a href="/" onClick={() => closeMenu()}>
              <li>
                <span>
                  <SecurityIcon />
                </span>
                Privacy
              </li>
            </a>
            <a href="/" onClick={() => closeMenu()}>
              <li>
                <span>
                  <EmailIcon />
                </span>
                Contact us
              </li>
            </a>
            <a href="/" onClick={() => closeMenu()}>
              <li>
                <span>
                  <NotificationsIcon />
                </span>
                Notifications
              </li>
            </a>
            <a href="/" onClick={() => closeMenu()}>
              <li>
                <span>
                  <LogoutIcon />
                </span>
                Sign out
              </li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}
