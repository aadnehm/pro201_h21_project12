import "./AboutUs.css";
export default function AboutUs() {
  return (
    <>
      <div className="about-wrapper">
        <div className="about-text-wrapper">
          <div className="about-text-left">
            <h2>About Redd Barna</h2>
            <p className={"about-text"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              aspernatur assumenda corporis culpa dolore eos error ex expedita
              illo iste itaque magni maxime nemo neque obcaecati praesentium
              quae ratione, saepe sequi sunt tempore totam velit vero. Deleniti
              doloremque id iste necessitatibus nisi qui unde! Eveniet modi
              perferendis recusandae rem voluptate. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Accusamus doloribus fugiat id
              incidunt itaque laboriosam minus molestias, nisi, nulla officiis
              possimus quasi quia repellat sit suscipit tenetur totam velit
              veniam. Ab assumenda at dolorem ducimus earum esse illo iure,
              maiores, odio officiis porro rerum saepe sed sit vitae! Natus,
              voluptates!
            </p>
            <p>Show More</p>
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
              <div className={"values-list-item"}>
                <div className="values-list-item-icon">
                  <img src="./img/handhearticon.jpeg" alt="some icon" />
                </div>
                <div className="values-list-item-text">
                  <div>Transparency</div>
                  <div>
                    Redd Barna will always be open and transparent about what we
                    do
                  </div>
                </div>
              </div>
              <div className={"values-list-item"}>
                <div className="values-list-item-icon">
                  <img src="./img/handhearticon.jpeg" alt="some icon" />
                </div>
                <div className="values-list-item-text">
                  <div>Transparency</div>
                  <div>
                    Redd Barna will always be open and transparent about what we
                    do
                  </div>
                </div>
              </div>
              <div className={"values-list-item"}>
                <div className="values-list-item-icon">
                  <img src="./img/handhearticon.jpeg" alt="some icon" />
                </div>
                <div className="values-list-item-text">
                  <div>Transparency</div>
                  <div>
                    Redd Barna will always be open and transparent about what we
                    do
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-people-wrapper">
          <h2>The people behind</h2>
          <div className="people-cards-wrapper">
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
          </div>
        </div>
        <div className="about-contact-wrapper">
          <h2>Get in touch with us</h2>
          <div className="contact-footer">
            <div className="about-location-wrapper">
              <div className={"about-header"}>Location</div>
              <div>Storgata 38, 0182 Oslo</div>
            </div>
            <div className="about-contactinfo-wrapper">
              <div className={"about-header"}>Contact Info</div>
              <div>Redd Barna</div>
              <div>Postboks 0492 St. Olavs Plass</div>
              <div>0130 Oslo</div>
              <div></div>
              <div>(+47) 22 99 09 00</div>
              <div></div>
              <div>giverservice@reddbarna.no</div>
              <div>post@reddbarna.no</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function PeopleCard() {
    return (
      <>
        <div className="people-card-wrapper">
          <div className="people-card-image">
            <img
              src="https://images.unsplash.com/photo-1520975708797-fd2543e902bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHVkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="people-card-name">Name Nameson</div>
          <div className="people-card-title">Founder</div>
        </div>
      </>
    );
  }
}
