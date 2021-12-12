import React, { useState } from "react";
//CSS
import "./Search.css";
//Components
import Search from "./Search";
import { Grid } from "@mui/material";

//Function that filters out posts depending on the search
const filterPosts = (nonProfitsPosts, query) => {
  if (!query) {
    return nonProfitsPosts;
  }

  return nonProfitsPosts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
};

//Pulling non-profits from cloud database and storing it in state
const SearchNonProfits = ({ orgs }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredPosts = filterPosts(orgs, searchQuery);

  return (
    <main className="search-posts">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="cards">
        {filteredPosts.map((nonProfitsPosts) => (
          <div className="card">
            <img
              className="image"
              src={`./img/${nonProfitsPosts.img}`}
              alt={nonProfitsPosts.name}
            />
            <div className="card-name" key={nonProfitsPosts.key}>
              {nonProfitsPosts.name}
              <br />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SearchNonProfits;
