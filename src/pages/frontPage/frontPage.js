import React from "react";
import "./frontPage.css";
export function FrontPage() {
  const img =
    "url(" + process.env.PUBLIC_URL + "/img/frontpage/frontpage-header.png)";
  return (
    <header
      style={{
        backgroundImage: img,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="home-header1"
    >
      <div className="home-header1-content">
        <button>Find Non-profit</button>
        <button>About us</button>
      </div>
    </header>
  );
}
