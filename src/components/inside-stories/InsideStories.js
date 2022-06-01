import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./inside-stories.css";

export default function InsideStories({ selectedNonProfit }) {
  const [moreEnabled, setMoreEnabled] = useState(false);
  const handleMore = () => {
    setMoreEnabled(!moreEnabled);
    document.getElementById("videos-header").scrollIntoView();
  };

  const [moreArticlesEnabled, setMoreArticlesEnabled] = useState(false);
  const handleMoreArticles = () => {
    setMoreArticlesEnabled(!moreArticlesEnabled);
  };
  var insideStoriesData;
  if (window.location.pathname.split("/").length === 3) {
    insideStoriesData = selectedNonProfit.insideStories;
  } else {
    insideStoriesData = selectedNonProfit.projectStories;
  }

  var allVideos = [];
  var threeNewestVideos = [];

  if (insideStoriesData.length > 3) {
    for (
      var i = insideStoriesData.length - 1;
      i > insideStoriesData.length - 4;
      i--
    ) {
      threeNewestVideos.push(insideStoriesData[i]);
    }
    for (var i = insideStoriesData.length - 1; i > -1; i--) {
      allVideos.push(insideStoriesData[i]);
    }
  } else {
    for (var i = insideStoriesData.length - 1; i > -1; i--) {
      threeNewestVideos.push(insideStoriesData[i]);
      allVideos.push(insideStoriesData[i]);
    }
  }

  const posterData = selectedNonProfit.posters;

  const articleData = selectedNonProfit.articles;
  var allArticles = [];
  var sixNewestArticles = [];

  if (articleData.length > 6) {
    for (var i = articleData.length - 1; i > articleData.length - 7; i--) {
      sixNewestArticles.push(articleData[i]);
    }
    for (var i = articleData.length - 1; i > -1; i--) {
      allArticles.push(articleData[i]);
    }
  } else {
    for (var i = articleData.length - 1; i > -1; i--) {
      sixNewestArticles.push(articleData[i]);
      allArticles.push(articleData[i]);
    }
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
      <h2 id="videos-header">Videos</h2>
      {moreEnabled ? (
        <div className="iframes-div">
          {allVideos.map((video, index) => (
            <div
              key={index}
              className="story-div"
              id={`player-div${video.id}`}
              onClick={() => {
                HandlePlay(video.id);
              }}
            >
              <div id={`reactPlayer${video.id}`} className="react-player">
                <ReactPlayer
                  id={`player${video.id}`}
                  className="player"
                  url={video.link}
                  width="100%"
                  height="100%"
                  controls="true"
                  onPlay={() => {
                    HandlePlay(video.id);
                  }}
                />
                <div className="playerText">
                  <h4>{video.title}</h4>
                  <p>{video.about}</p>
                  <p className="longText">{video.longText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="iframes-div">
          {threeNewestVideos.map((video, index) => (
            <div
              key={index}
              className="story-div"
              id={`player-div${video.id}`}
              onClick={() => {
                HandlePlay(video.id);
              }}
            >
              <div id={`reactPlayer${video.id}`} className="react-player">
                <ReactPlayer
                  id={`player${video.id}`}
                  className="player"
                  url={video.link}
                  width="100%"
                  height="100%"
                  controls="true"
                  onPlay={() => {
                    HandlePlay(video.id);
                  }}
                />
                <div className="playerText">
                  <h4>{video.title}</h4>
                  <p>{video.about}</p>
                  <p className="longText">{video.longText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="show-all " onClick={handleMore}>
        <button>{moreEnabled ? "Show less" : "Show more videos"}</button>
      </div>
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
      <div>
        <div>
          <h2>Articles</h2>
          {moreArticlesEnabled ? (
            <div className="articles-div">
              {allArticles.map((article, index) => (
                <div className="article-div" key={index}>
                  <img
                    className="article-image"
                    src={
                      process.env.PUBLIC_URL +
                      "/img/insidestories/african-chldren-insidestories.jpg"
                    }
                    alt={"image"}
                  ></img>
                  <div className="playerText">
                    <h4>{article.header}</h4>
                    <p>{article.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="articles-div">
              {sixNewestArticles.map((article, index) => (
                <div className="article-div" key={index}>
                  <img
                    className="article-image"
                    src={
                      process.env.PUBLIC_URL +
                      "/img/insidestories/african-chldren-insidestories.jpg"
                    }
                    alt={"image"}
                  ></img>
                  <div className="playerText">
                    <h4>{article.header}</h4>
                    <p>{article.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="show-all " onClick={handleMoreArticles}>
          <button>
            {moreArticlesEnabled ? "Show less" : "Show more articles"}
          </button>
        </div>
        <div className="posterDiv3">
          <div className="posterParagraphDiv">
            <h2>
              {posterData[1].info} <br />
              <br />
              <button>Go to article</button>
            </h2>
          </div>
          <img src={process.env.PUBLIC_URL + posterData[1].image}></img>
        </div>
      </div>
    </div>
  );
}
