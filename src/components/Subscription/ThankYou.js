import "./thank-you.css"
import { useLocation} from "react-router-dom";

export default function ThankYou(){

  const location = useLocation();
  const img = location.state.img;
  const img1 = location.state.img1;
  const img2 = location.state.img2;
  const name = location.state.name;
  const project = location.state.project;

  const someText1 = "We support"
  const someText2 = "We donate to"

  console.log(img)
  console.log(name)
  console.log("project:", project)

    return <div>
    <div className="thankyou-component-container">
    <div className="thankyou-content-container">
      <h2>Thank you for choosing {project ? project :  name}</h2>
      <p>You now have access to reports, social media content and more in your account page. Be sure to <span>check it out.</span> But as a litttle appreciation, you can select <span>one</span> instagram story to <span>share</span> the news that you are now a donator.</p>
        <div className="some-gallery">
            <SomeCard img={img} project={project} name={name} sometext={someText1}/>
            <SomeCard img={img1} project={project} name={name} sometext={someText2} />
            <SomeCard img={img2} project={project} name={name} sometext={someText1}/>
        </div>
        <button>Share</button>
    </div>
   
    </div>
    </div>
}

function SomeCard({img, project,name, sometext}){
    return (
        <div className="thank-you-some-card"  >    
        <div style={{
            borderRadius:"10px",
            background: `url(${
              img
            }) no-repeat center center/cover`,
          }}>
              <div className="s-card-top-line"></div>
              <div className="some-company-info">
              <img src={process.env.PUBLIC_URL + "/img/uwork.png"} alt="" />
              <p>UWork</p>
              <p>1min</p>
              </div>
              
              <div className="some-card-text">
                <h4>{sometext}</h4>
                <h4>{project ? project: name}</h4>
              </div>
              <div className="some-message-wrapper">
                <div className="some-card-message"><p>Send Message</p></div>
                <img src={process.env.PUBLIC_URL + "/img/send.png"} alt="" />
              </div>
          </div>
          <input type="radio" toggle />
           
        </div>
    )
}

