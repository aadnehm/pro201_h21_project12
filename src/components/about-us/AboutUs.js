import "./about-us.css";
import { useState } from "react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function AboutUs(props) {
  const transition = { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const [moreEnabled, setMoreEnabled] = useState(false);
  const aboutText =
    "Around the world, too many children start life at a disadvantage simply because of who they are and where they come from. Millions of children are dying from preventable causes, face poverty, violence, disease and hunger. They are caught up in war zones and disasters they did nothing to create. And they are denied an education and other basic rights owed to them. All children deserve better. We champion the rights and interests of children worldwide, putting the most vulnerable children first.";

  const handleMore = () => {
    setMoreEnabled(!moreEnabled);
  };
  return (
    <>
      <div className="grey-line" />
      <div className="about-wrapper">
        <div className="about-text-wrapper">
          <div className="about-text-left">
            <h1>{"About " + props.data.name}</h1>
            <article className={"about-text"}>
              {moreEnabled ? (
                <div>
                  <p>{props.data.descriptionShort}</p>
                  <div>
                    <p>{props.data.descriptionExtended}</p>
                  </div>
                </div>
              ) : (
                props.data.descriptionShort
              )}
            </article>
            <div className="about-header show-more " onClick={handleMore}>
              {moreEnabled ? (
                <ArrowCircleUpIcon />
              ) : (
                <div>
                  <ArrowCircleDownIcon /> Show more
                </div>
              )}
            </div>
          </div>
          <div className="about-text-image">
            <div className={"about-text-image-wrapper"}>
              <img
                src="https://images.unsplash.com/photo-1593347535897-06149dba667c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                alt="something image"
              />
            </div>
          </div>
        </div>
        <div className="about-values-wrapper">
          <div className="about-values-image">
            <div className="about-values-image-container">
              <img
                src="https://media.istockphoto.com/photos/integrity-concept-picture-id1308296736?k=20&m=1308296736&s=612x612&w=0&h=YGSpxKf23f1vl_hR81mbUznt8_mHOlYJy7IEOW-cqhk="
                alt="honesty"
              />
            </div>
          </div>
          <div className="about-values-list">
            <div className={"about-header our-values"}>Our Values</div>
            <div className="about-values-items-wrapper">
              {props.data.values.map((item, key) => (
                <div className={"values-list-item"} key={key}>
                  <div className="values-list-item-icon">
                    <img
                      src={process.env.PUBLIC_URL + "/img/handhearticon.png"}
                      alt="some icon"
                    />
                  </div>
                  <div className="values-list-item-text">
                    <div className={"about-header"}>{item.name}</div>
                    <div>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-people-wrapper">
          <h2>The people behind</h2>
          <div className="people-cards-wrapper">
            <PeopleCard
              img={process.env.PUBLIC_URL + "/img/Employees/person1.jpg"}
              name={"Test Persson"}
              title={"Founder"}
            />
            <PeopleCard
              img={process.env.PUBLIC_URL + "/img/Employees/person2.jpg"}
              name={"Max Powers"}
              title={"CEO"}
            />
            <PeopleCard
              img={process.env.PUBLIC_URL + "/img/Employees/person3.jpg"}
              name={"Luna Lovegood"}
              title={"Key Account Manager"}
            />
            <PeopleCard
              img={process.env.PUBLIC_URL + "/img/Employees/person4.jpg"}
              name={"Lance Hardwood"}
              title={"PR Rep"}
            />
            <PeopleCard
              img={process.env.PUBLIC_URL + "/img/Employees/person5.jpg"}
              name={"Louis Lane"}
              title={"Head of Relations"}
            />
          </div>
        </div>
        <div className="about-contact-wrapper">
          <h2>Get in touch with us</h2>
          <div className={"about-header"}>Location</div>
          <div>Storgata 38, 0182 Oslo</div>
          <div className="contact-footer">
            <div className="about-location-wrapper">
              <iframe
                className={"about-location-map"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.956801082852!2d10.755611116436636!3d59.91626428186806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e60dceea5cb%3A0xcb746ddbd3f7d3e7!2sStorgata%2038%2C%200182%20Oslo!5e0!3m2!1sen!2sno!4v1652953502553!5m2!1sen!2sno"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="about-contactinfo-wrapper">
              <div className="about-contactinfo-text-wrapper">
                <div className={"about-header"}>Post-Address</div>
                <div>Redd Barna</div>
                <div>Postboks 0492 St. Olavs Plass</div>
                <div>0130 Oslo</div>
                <div className={"about-header"}>Telephone</div>
                <div>(+47) 22 99 09 00</div>
                <div className={"about-header"}>Email</div>
                <div>giverservice@reddbarna.no</div>
                <div>post@reddbarna.no</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function PeopleCard({ img, name, title }) {
    return (
      <>
        <div className="people-card-wrapper">
          <div className="people-card-image">
            <img src={img} alt="profile-pic" />
          </div>
          <div className="people-card-name">{name}</div>
          <div className="people-card-title">{title}</div>
        </div>
      </>
    );
  }
}
