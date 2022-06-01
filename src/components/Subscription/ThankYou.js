import "./thank-you.css"

export default function ThankYou(){

    return <div>
    <div className="thankyou-component-container">
    <div className="thankyou-content-container">
      <h2>Thank you for choosing project Somalia</h2>
      <p>Yuo now have access to reports, social media content and more in your account page. Be sure to <span>check it out.</span> But as a litttle appreciation, you can select <span>one</span> instagram story to <span>share</span> the news that you are now a donator.</p>
        <div className="some-gallery">
               <img src={process.env.PUBLIC_URL + "/img/some-stories/story1.png"}/>
               <img src={process.env.PUBLIC_URL + "/img/some-stories/story2.png"}/>
               <img src={process.env.PUBLIC_URL + "/img/some-stories/story3.png"}/>
        </div>
        <button>Share</button>
    </div>
   
    </div>
    </div>
}

