import React from "react";
import "./frontPage.css";
import NonProfitsData from "../../components/search/NonProfitsData";
import {
  goToTop,
  uppercaseFirstLetter,
} from "../../components/search/navbarSearch/NavbarSearch";
import { useNavigate } from "react-router";

function ChooseSubscription() {
  const img =
    "url(" +
    process.env.PUBLIC_URL +
    "/img/frontpage/frontpage-second-header.png)";

  return (
    <div
      className={"choose-subscription-content"}
      style={{
        backgroundImage: img,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "70vh",
      }}
    >
      <div className={"choose-subscription-content-text"}>
        <h1>Choose subscription</h1>
        <p>Find a subscription that suits your company and strategy</p>
      </div>
    </div>
  );
}

export function FrontPage() {
  return (
    <>
      <FrontPageHeader />
      <div className={"frontpage-content"}>
        <NewestNonProfits />
        <WhoAreWe />
        <ChooseSubscription />
      </div>
    </>
  );
}
function FrontPageHeader() {
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
        height: "70vh",
      }}
      className="home-header1"
    >
      <div className="home-header1-content">
        <h1>MELIORA IMPACT</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          facilisis mi ac nunc tincidunt, vitae ultricies purus sodales. Morbi
          nisl turpis, ornare id suscipit accumsan, volutpat vitae tortor.
          Aenean.
        </h4>
        <button>Find Non-profit</button>
        <button>About us</button>
      </div>
    </header>
  );
}

function NewestNonProfits() {
  return (
    <>
      <h3 style={{ fontWeight: "bold", marginBottom: "30px" }}>
        Newest non-profits
      </h3>

      <div className={"newest-nonprofits-cardgrid"}>
        {NonProfitsData.slice(0, 6).map((nonprofit) => (
          <NewestNonProfitsCard nonprofit={nonprofit} />
        ))}
      </div>
    </>
  );
}

function NewestNonProfitsCard(props) {
  const navigate = useNavigate();
  function redirectNonprofit(name) {
    const path = "/non-profit/" + name.replace(/ /g, "");
    navigate(path);
    goToTop();
  }

  return (
    <div
      className={"newest-nonprofit-card"}
      onClick={() => {
        redirectNonprofit(props.nonprofit.name);
      }}
    >
      <img src={process.env.PUBLIC_URL + props.nonprofit.img} clas />
      <div className={"newest-nonprofit-card-text"}>
        <p>{props.nonprofit.name}</p>
        <p>{uppercaseFirstLetter(props.nonprofit.categories[0])}</p>
      </div>
    </div>
  );
}

function PersonCards() {
  const persons = [
    { name: "Navn navnesen", img: "/img/frontpage/frontpage-person1.png" },
    { name: "Navn navnesen", img: "/img/frontpage/frontpage-person2.png" },
    { name: "Navn navnesen", img: "/img/frontpage/frontpage-person3.png" },
  ];
  return (
    <div className={"person-cardgrid"}>
      {persons.map((person) => (
        <div className={"person-card"}>
          <img src={process.env.PUBLIC_URL + person.img} />
          <p>{person.name}</p>
        </div>
      ))}
    </div>
  );
}

function WhoAreWe() {
  return (
    <>
      <h3 style={{ fontWeight: "bold", marginBottom: "30px" }}>Who are we?</h3>
      <PersonCards />
    </>
  );
}
