import React, { useState } from "react";
//CSS
import "./Search.css";
//Components
import Search from "./Search";
import Filter from "./Filter";
import { Button, Grid } from "@mui/material";
import Menu from "../navbar/Menu.js";

import { useNavigate } from "react-router";

//Function that filters out posts depending on the search or filter
const filterPosts = (orgs, searchQuery, continentQuery, categoryQuery) => {
  if (
    !searchQuery &&
    continentQuery.length === 0 &&
    categoryQuery.length === 0
  ) {
    return orgs;
  }

  var filteredByNames = orgs.filter((post) => {
    return post.name.toLowerCase().includes(searchQuery) || !searchQuery;
  });

  var filteredByContinents = filteredByNames.filter((post) => {
    return (
      post.continents.some((r) => continentQuery.indexOf(r) >= 0) ||
      continentQuery.length === 0
    );
  });

  return filteredByContinents.filter((post) => {
    return (
      post.categories.some((r) => categoryQuery.indexOf(r) >= 0) ||
      categoryQuery.length === 0
    );
  });
};

//Pulling non-profits from cloud database and storing it in state
const SearchNonProfits = ({ orgs, setSelectedOrg }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [continentQuery, setContinentQuery] = useState([]);
  const [categoryQuery, setCategoryQuery] = useState([]);

  const filteredPosts = filterPosts(
    orgs,
    searchQuery,
    continentQuery,
    categoryQuery
  );
  function selectNonProfit(orgs, setSelectedOrg) {
    setSelectedOrg(orgs);
    localStorage.setItem("org", JSON.stringify(orgs));
    navigate("/non-profit");
  }

  return (
    <main className="search-posts">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="filter">
        <Filter
          continentQuery={continentQuery}
          setContinentQuery={setContinentQuery}
          categoryQuery={categoryQuery}
          setCateoryQuery={setCategoryQuery}
        />
      </div>
      <div className="cards">
        {filteredPosts.map((orgs) => (
          <div
            className="card"
            onClick={() => selectNonProfit(orgs, setSelectedOrg)}
          >
            <img className="image" src={`./img/${orgs.img}`} alt={orgs.name} />
            <div className="card-name" key={orgs.key}>
              {orgs.name}
              <br />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SearchNonProfits;
