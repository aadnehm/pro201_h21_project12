import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="wrapper">
      <footer className="footer-wrapper">
        <div className="footer">
          <div className="footer-left">
            <div className="footer-icon-wrapper">
              <img
                src={process.env.PUBLIC_URL + "/img/MI-logo-black1.png"}
                alt="logo"
              />
            </div>
            <div className="footer-icon-text header-text">Meliora Impact</div>
          </div>
          <div className="footer-middle-left">
            <div className="list-wrapper">
              <div className="link-wrapper header-text">Businesses</div>
              <div className="link-wrapper">
                <a href="/signup">Sign up</a>
              </div>
              <div className="link-wrapper">
                <a href="/signup">Subscription</a>
              </div>
              <div className="link-wrapper">
                <a href="/signup">My Page</a>
              </div>
              <div className="link-wrapper">
                <a href="/signup">Donating</a>
              </div>
              <div className="link-wrapper">
                <a href="/signup">Privacy</a>
              </div>
              <div className="link-wrapper">
                <a href="/signup">FAQ</a>
              </div>
            </div>
          </div>
          <div className="footer-middle-right">
            <div className="list-wrapper">
              <div className="link-wrapper header-text">Non Profits</div>
              <div className="link-wrapper">
                <a href="/signup">Sign up</a>
              </div>
              <div className="link-wrapper">
                <a href="/signup">Donations</a>
              </div>
              <div className="link-wrapper">
                <a href="/signup">My Page</a>
              </div>
              <div className="link-wrapper">
                <a href="/signup">FAQ</a>
              </div>
              <div className="link-wrapper">
                <a href="/signup">Privacy</a>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="list-wrapper">
              <div className="header-text">Stay in touch with us</div>
              <div className="sm-wrapper">
                <div className="sm-icon">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBY1xCpqA3ViGvbpu3_5Vl1tsXFDIQ1lRNLGNNUaq5tohjlROgl62g20oZsItlNxfiViU&usqp=CAU"
                    alt="icon"
                  />
                </div>
                <div className="sm-icon">
                  <img
                    src="https://www.iconpacks.net/icons/1/free-pinterest-icon-113-thumb.png"
                    alt="icon"
                  />
                </div>
                <div className="sm-icon">
                  <img
                    src="https://icons-for-free.com/download-icon-linkedin+network+social+icon-1320190550979202624_512.icns"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="header-text">Be part of the action</div>
              <div className="newsletter-text">
                Sign up to our newsletter, to recieve updates on the latest
                news, nonprofits and much more. We respect your privacy, your
                information is safe with us
              </div>
              <div className="input-wrapper">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-small" />
      </footer>
    </div>
  );
};

export default Footer;
