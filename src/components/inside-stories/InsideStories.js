import React from "react";
import ReactPlayer from "react-player";
import "./inside-stories.css";
import insideStoriesData from "./InsideStoriesData";

export default function InsideStories() {
  let expandedPlayerId = 0;
  function HandlePlay(id) {
    if (expandedPlayerId !== 0) {
      document.getElementById(`reactPlayer${expandedPlayerId}`).className =
        "react-player";
      document.getElementById(`player-div${expandedPlayerId}`).className =
        "story-div";
    }
    expandedPlayerId = id;
    document.getElementById(`reactPlayer${id}`).className = "expandedPlayer";
    document.getElementById(`player-div${id}`).className = "modal-div";
  }

  window.onclick = function (event) {
    let modal = document.getElementsByClassName("modal-div")[0];
    let player = document.getElementsByClassName("expandedPlayer")[0];

    if (event.target === modal) {
      modal.className = "story-div";
      player.className = "react-player";
    }
  };

  return (
    <div className="inside-stories">
        <div className="grey-line" />
      <h1>Inside stories</h1>
      <div className="posterDiv">
        <div className="posterParagraphDiv">
          <h2>
            Wonder what we do? Get the latest inside stories from all our
            projects
          </h2>
        </div>
        <img
          src={
            process.env.PUBLIC_URL +
            "/img/insidestories/african-chldren-insidestories.jpg"
          }
          alt={"image"}
        ></img>
      </div>
      <div className="iframes-div">
        {insideStoriesData.map((story) => (
          <div
            className="story-div"
            id={`player-div${story.id}`}
            onClick={() => {
              HandlePlay(story.id);
            }}
          >
            <div id={`reactPlayer${story.id}`} className="react-player">
              <ReactPlayer
                id={`player${story.id}`}
                className="player"
                url={story.link}
                width="100%"
                height="100%"
                controls="true"
                onPlay={() => {
                  HandlePlay(story.id);
                }}
              />
              <div className="playerText">
                <h4>{story.title}</h4>
                <p>{story.about}</p>
                <p className="longText">{story.longText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="posterDiv2">
        <div className="posterParagraphDiv">
          <h2>
            Read about how Foodora have made a massive impact through our
            project <br />
            <br />
            <button>Go to article</button>
          </h2>
        </div>
        <img
          src={
            process.env.PUBLIC_URL +
            "/img/insidestories/other-children-insidestories.jpg"
          }
          alt={"image"}
        ></img>
      </div>
      <hr />
    </div>
  );
}
