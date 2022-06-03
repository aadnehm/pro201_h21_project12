import "./thank-you.css";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function ThankYou(props) {
  const { selectedData } = props;
  let img = selectedData.img;
  if (location.pathname.split("/").length === 5) {
    img = selectedData.img3;
  }
  const img1 = selectedData.img1;
  const img2 = selectedData.img2;
  const name = selectedData.name;
  const project = selectedData.project;
  const [checkedSomeCard, setCheckedSomeCard] = useState(0);

  const someText1 = "We support";
  const someText2 = "We donate to";

  const navigate = useNavigate();

  return (
    <div>
      <div className="thankyou-content-container">
        <h2>Thank you for choosing {project ? project : name}</h2>
        <p>
          You now have access to reports, social media content and more in your
          account page. Be sure to <span>check it out.</span> But as a litttle
          appreciation, you can select <span>one</span> instagram story to{" "}
          <span>share</span> the news that you are now a donator.
        </p>
        <div className="some-gallery">
          <SomeCard
            img={img}
            project={project}
            name={name}
            sometext={someText1}
            checkedSomeCard={checkedSomeCard}
            setCheckedSomeCard={setCheckedSomeCard}
            id={1}
          />
          <SomeCard
            img={img1}
            project={project}
            name={name}
            sometext={someText2}
            checkedSomeCard={checkedSomeCard}
            setCheckedSomeCard={setCheckedSomeCard}
            id={2}
          />
          <SomeCard
            img={img2}
            project={project}
            name={name}
            sometext={someText1}
            checkedSomeCard={checkedSomeCard}
            setCheckedSomeCard={setCheckedSomeCard}
            id={3}
          />
        </div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Share
        </button>
      </div>
    </div>
  );
}

function SomeCard({
  img,
  project,
  name,
  sometext,
  checkedSomeCard,
  setCheckedSomeCard,
  id,
}) {
  let checkedThing = false;
  if (checkedSomeCard === id) {
    checkedThing = true;
  }

  return (
    <div className="thank-you-some-card">
      <div
        style={{
          borderRadius: "10px",
          background: `url(${img}) no-repeat center center/cover`,
        }}
      >
        <div className="s-card-top-line" />
        <div className="some-company-info">
          <img src={process.env.PUBLIC_URL + "/img/uwork.png"} alt="" />
          <p>UWork</p>
          <p>1min</p>
        </div>

        <div className="some-card-text">
          <h4>{sometext}</h4>
          <h4>{project ? project : name}</h4>
        </div>
        <div className="some-message-wrapper">
          <div className="some-card-message">
            <p>Send Message</p>
          </div>
          <img src={process.env.PUBLIC_URL + "/img/send.png"} alt="" />
        </div>
      </div>
      <input
        type="radio"
        checked={checkedThing}
        onClick={() => {
          setCheckedSomeCard(id);
        }}
      />
    </div>
  );
}
