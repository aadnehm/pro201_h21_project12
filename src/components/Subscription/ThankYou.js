import "./thank-you.css"

export default function ThankYou(){

    return <div>
    <div className="thankyou-component-container">
    <div className="thankyou-content-container">
      <h2>Thank you for choosing project Somalia</h2>
      <p>You now have access to reports, social media content and more in your account page. Be sure to <span>check it out.</span> But as a litttle appreciation, you can select <span>one</span> instagram story to <span>share</span> the news that you are now a donator.</p>
        <div className="some-gallery">
            <SomeCard/>
            <SomeCard/>
            <SomeCard/>
        </div>
        <button>Share</button>
    </div>
   
    </div>
    </div>
}

function SomeCard(){
    return (
        <div className="thank-you-some-card"  >    
        <div style={{
            background: `url(${
              process.env.PUBLIC_URL + "/img/projects/project-nepal/1.png"
            }) no-repeat center center/cover`,
          }}>
              <div className="s-card-top-line"></div>
              <div className="some-company-info">
              <img src={process.env.PUBLIC_URL + "/img/uwork.png"} alt="" />
              <p>UWork</p>
              <p>1min</p>
              </div>
              
              <div className="some-card-text">
                <h4>We support</h4>
                <h4>Project Lorem</h4>
              </div>
              <div className="some-message-wrapper">
                <div className="some-card-message"><p>Send Message</p></div>
                <img src={process.env.PUBLIC_URL + "/img/send.png"} alt="" />
              </div>
          </div>
          <input type="radio" />
           
        </div>
    )
}

