import { display } from "@mui/system";
import React from "react";
import ReactPlayer from "react-player";
import "./InsideStories.css";
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
    var modal = document.getElementsByClassName("modal-div")[0];
    var player = document.getElementsByClassName("expandedPlayer")[0];

    if (event.target == modal) {
      modal.className = "story-div";
      player.className = "react-player";
    }
  };

  return (
    <div className="inside-stories">
      <hr className="horizontal-lines" />
      <h2>Inside stories</h2>
      <div className="iframes-div">
        {insideStoriesData.map((story) => (
          <div className="story-div" id={`player-div${story.id}`}>
            <div id={`reactPlayer${story.id}`} className="react-player">
              <ReactPlayer
                id={`player${story.id}`}
                className="player"
                url={story.link}
                width="100%"
                height="100%"
                onPlay={() => {
                  HandlePlay(story.id);
                }}
              />
              <div className="playerText">
                <h4>{story.title}</h4>
                <p>{story.about}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}
