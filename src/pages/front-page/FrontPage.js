import React from "react";
import "./front-page.css";
import NonProfitsData from "../../components/non-profits-data/NonProfitsData";
import { useNavigate } from "react-router";
import { goToTop } from "../../lib/toTop";
import { uppercaseFirstLetter } from "../../lib/upperCaseFirstLetter";

function Communtiy() {
  const img =
    "url(" + process.env.PUBLIC_URL + "/img/frontpage/frontpage-community.png)";
  return (
    <div
      className={"community-background"}
      style={{
        marginTop: "90px",
        marginBottom: "90px",
        backgroundImage: img,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "80vw",
        height: "50vh",
      }}
      className="home-header1"
    >
      <div className={"community-content"}>
        <div className={"community-text"}>
          <h1>Get the latest from our community</h1>
          <p>
            Sign up to our newsletter today, and get a weekly report on what is
            going on in our community
          </p>
          <input type={"email"} placeholder={"Enter email adress"} />
          <br />
          <button>Sign up now</button>
        </div>
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
        <ImpactStatements />
        <CuratedNonprofits />
        <Communtiy />
      </div>
    </>
  );
}
function FrontPageHeader() {
  const navigate = useNavigate();
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
        height: "100vh",
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
        <button
          onClick={() => {
            navigate("nonprofits");
          }}
        >
          Find Non-profit
        </button>
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
        {NonProfitsData.slice(0, 6).map((nonprofit, index) => (
          <NewestNonProfitsCard nonprofit={nonprofit} key={index} />
        ))}
      </div>
    </>
  );
}

function NewestNonProfitsCard(props) {
  const navigate = useNavigate();
  function redirectNonprofit(name) {
    const path = "/nonprofit/" + name.replace(/ /g, "");
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
      <img src={process.env.PUBLIC_URL + props.nonprofit.img} alt={"image"} />
      <div className={"newest-nonprofit-card-text"}>
        <p>{props.nonprofit.name}</p>
        <p>{uppercaseFirstLetter(props.nonprofit.categories[0])}</p>
      </div>
    </div>
  );
}

function PersonCards(props) {
  const data = props.data;
  return (
    <div className={"person-cardgrid"}>
      {data.map((value, index) => (
        <div className={"data-card"} key={index}>
          <img src={process.env.PUBLIC_URL + value.img} alt={"image"} />
          <p>{value.name}</p>
        </div>
      ))}
    </div>
  );
}

function WhoAreWe() {
  const persons = [
    { name: "Navn navnesen", img: "/img/frontpage/frontpage-person1.png" },
    { name: "Navn navnesen", img: "/img/frontpage/frontpage-person2.png" },
    { name: "Navn navnesen", img: "/img/frontpage/frontpage-person3.png" },
  ];
  return (
    <div className={"who-are-we"}>
      <h3 style={{ fontWeight: "bold", marginBottom: "30px" }}>Who are we?</h3>
      <PersonCards data={persons} />
    </div>
  );
}

function ChooseSubscription() {
  const img =
    "url(" +
    process.env.PUBLIC_URL +
    "/img/frontpage/frontpage-second-header.png)";

  return (
    <div
      className={"choose-subscription-content"}
      style={{
        backgroundImage:
          "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))," + img,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "70vh",
      }}
    >
      <div className={"choose-subscription-content-text"}>
        <h1>Choose subscription</h1>
        <p>Find a subscription that suits your company and strategy</p>
        <button>Subscriptions</button>
      </div>
    </div>
  );
}

function ImpactStatements() {
  const projects = [];
  for (let i = 0; i < 3; i++) {
    projects.push(NonProfitsData[0].projects[i]);
  }
  return (
    <div className={"impact-statements"}>
      <h3 style={{ fontWeight: "bold", marginBottom: "30px" }}>
        Impact statements
      </h3>
      <PersonCards data={projects} />
    </div>
  );
}

function CuratedNonprofits() {
  const img =
    "url(" +
    process.env.PUBLIC_URL +
    "/img/frontpage/frontpage-curated-nonprofits.png)";
  return (
    <div
      className={"curated-nonprofits"}
      style={{
        width: "80vw",
        backgroundColor: "#333333",
        backgroundImage: img,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        height: "80vh",
      }}
    >
      <div className={"curated-nonprofits-content"}>
        <div className={"curated-nonprofits-text"}>
          <h1>Curated non-profits, just for you!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis mi ac nunc tincidunt, vitae ultricies purus sodales. Morbi
            nisl turpis, ornare id suscipit accumsan, volutpat vitae tortor.
            Aenean.
          </p>
          <button>Become a giver</button>
        </div>
      </div>
    </div>
  );
}
