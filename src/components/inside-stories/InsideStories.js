import React from "react";
import ReactPlayer from "react-player";
import "./inside-stories.css";

export default function InsideStories({ selectedNonProfit }) {
  var insideStoriesData;
  if (window.location.pathname.split("/").length === 3) {
    insideStoriesData = selectedNonProfit.insideStories;
  } else {
    insideStoriesData = selectedNonProfit.projectStories;
  }

  var allArrays = [];

  let overflowNumber = insideStoriesData.length % 6;
  for (var i = 0; i < insideStoriesData.length - overflowNumber; i += 6) {
    var newArray = [
      insideStoriesData[i],
      insideStoriesData[i + 1],
      insideStoriesData[i + 2],
      insideStoriesData[i + 3],
      insideStoriesData[i + 4],
      insideStoriesData[i + 5],
    ];
    allArrays.push(newArray);
  }
  var overflowArray = [];
  for (var n = 0; n < overflowNumber; n++) {
    overflowArray.push(
      insideStoriesData[insideStoriesData.length - (overflowNumber - n)]
    );
  }

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

  var posterData = selectedNonProfit.posters;

  function CreatePoster() {
    if (posterData[0] !== null) {
      return (
        <div className="posterDiv2">
          <div className="posterParagraphDiv">
            <h2>
              {posterData[0].info} <br />
              <br />
              <button>Go to article</button>
            </h2>
          </div>
          <img src={process.env.PUBLIC_URL + posterData[0].image}></img>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

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
      <div>
        {allArrays.map((story) => (
          <div>
            <div className="iframes-div">
              <div
                className="story-div"
                id={`player-div${story[0].id}`}
                onClick={() => {
                  HandlePlay(story[0].id);
                }}
              >
                <div id={`reactPlayer${story[0].id}`} className="react-player">
                  <ReactPlayer
                    id={`player${story[0].id}`}
                    className="player"
                    url={story[0].link}
                    width="100%"
                    height="100%"
                    controls="true"
                    onPlay={() => {
                      HandlePlay(story[0].id);
                    }}
                  />
                  <div className="playerText">
                    <h4>{story[0].title}</h4>
                    <p>{story[0].about}</p>
                    <p className="longText">{story[0].longText}</p>
                  </div>
                </div>
              </div>
              <div
                className="story-div"
                id={`player-div${story[1].id}`}
                onClick={() => {
                  HandlePlay(story[1].id);
                }}
              >
                <div id={`reactPlayer${story[1].id}`} className="react-player">
                  <ReactPlayer
                    id={`player${story[1].id}`}
                    className="player"
                    url={story[1].link}
                    width="100%"
                    height="100%"
                    controls="true"
                    onPlay={() => {
                      HandlePlay(story[1].id);
                    }}
                  />
                  <div className="playerText">
                    <h4>{story[1].title}</h4>
                    <p>{story[1].about}</p>
                    <p className="longText">{story[1].longText}</p>
                  </div>
                </div>
              </div>
              <div
                className="story-div"
                id={`player-div${story[2].id}`}
                onClick={() => {
                  HandlePlay(story[2].id);
                }}
              >
                <div id={`reactPlayer${story[2].id}`} className="react-player">
                  <ReactPlayer
                    id={`player${story[2].id}`}
                    className="player"
                    url={story[2].link}
                    width="100%"
                    height="100%"
                    controls="true"
                    onPlay={() => {
                      HandlePlay(story[2].id);
                    }}
                  />
                  <div className="playerText">
                    <h4>{story[2].title}</h4>
                    <p>{story[2].about}</p>
                    <p className="longText">{story[2].longText}</p>
                  </div>
                </div>
              </div>
            </div>
            <CreatePoster />
            <div className="iframes-div">
              <div
                className="story-div"
                id={`player-div${story[3].id}`}
                onClick={() => {
                  HandlePlay(story[3].id);
                }}
              >
                <div id={`reactPlayer${story[3].id}`} className="react-player">
                  <ReactPlayer
                    id={`player${story[3].id}`}
                    className="player"
                    url={story[3].link}
                    width="100%"
                    height="100%"
                    controls="true"
                    onPlay={() => {
                      HandlePlay(story[3].id);
                    }}
                  />
                  <div className="playerText">
                    <h4>{story[3].title}</h4>
                    <p>{story[3].about}</p>
                    <p className="longText">{story[3].longText}</p>
                  </div>
                </div>
              </div>
              <div
                className="story-div"
                id={`player-div${story[4].id}`}
                onClick={() => {
                  HandlePlay(story[4].id);
                }}
              >
                <div id={`reactPlayer${story[4].id}`} className="react-player">
                  <ReactPlayer
                    id={`player${story[4].id}`}
                    className="player"
                    url={story[4].link}
                    width="100%"
                    height="100%"
                    controls="true"
                    onPlay={() => {
                      HandlePlay(story[4].id);
                    }}
                  />
                  <div className="playerText">
                    <h4>{story[4].title}</h4>
                    <p>{story[4].about}</p>
                    <p className="longText">{story[4].longText}</p>
                  </div>
                </div>
              </div>
              <div
                className="story-div"
                id={`player-div${story[5].id}`}
                onClick={() => {
                  HandlePlay(story[5].id);
                }}
              >
                <div id={`reactPlayer${story[5].id}`} className="react-player">
                  <ReactPlayer
                    id={`player${story[5].id}`}
                    className="player"
                    url={story[5].link}
                    width="100%"
                    height="100%"
                    controls="true"
                    onPlay={() => {
                      HandlePlay(story[5].id);
                    }}
                  />
                  <div className="playerText">
                    <h4>{story[5].title}</h4>
                    <p>{story[5].about}</p>
                    <p className="longText">{story[5].longText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="overflow-iframes-div">
          {overflowArray.map((story) => (
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
      </div>
    </div>
  );
}
