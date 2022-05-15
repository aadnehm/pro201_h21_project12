import React, { useEffect, useRef, useState } from "react";
import NonProfitsData from "../NonProfitsData";
import { useNavigate } from "react-router-dom";
import "./navbarSearch.css";

function useOutsideAlerter(ref) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        ref.current.lastChild.style.display = "none";
      } else {
        ref.current.lastChild.style.display = "block";
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function SearchResults(props) {
  const results = props.result;
  let navigate = useNavigate();

  function redirectNonprofit(name) {
    const path = "/non-profit/" + name.replace(/ /g, "");
    navigate(path);
  }

  if (props.search === "") {
    return <div className={"results-search"} style={{ display: "none" }} />;
  } else if (results.length === 0) {
    return (
      <div className={"results-search"}>
        <p style={{ marginLeft: "20px" }}>No results...</p>
      </div>
    );
  } else {
    return (
      <div className={"results-search"}>
        {results.length === 0 && <p>No results...</p>}
        {results.length !== 0 && (
          <ul className={"search-results"}>
            {results.map((nonprofit) => (
              <li
                style={{ textStyle: "none " }}
                onClick={() => {
                  redirectNonprofit(nonprofit.name);
                }}
              >
                <img className={"search-icon"} src={nonprofit.img} alt="icon" />
                <p className={"search-results-name"}>{nonprofit.name}</p>
                <p className={"search-results-category"}>
                  {uppercaseFirstLetter(nonprofit.categories[0])}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

function uppercaseFirstLetter(string) {
  const string2 = string.charAt(0).toUpperCase() + string.slice(1);
  return string2;
}

export function NavbarSearch() {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  function handleSearch(value) {
    setSearch(value);
  }
  useEffect(() => {
    setResults([]);
    const slicedNonprofits = NonProfitsData.slice(0, 7);

    slicedNonprofits.map((nonprofit) => {
      if (nonprofit.name.toLowerCase().includes(search.toLowerCase())) {
        setResults((prevState) => [...prevState, nonprofit]);
      }
    });
  }, [search]);
  const img = "url(./img/searchicon.png)";

  return (
    <div className={"search-navbar"} ref={wrapperRef}>
      <input
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={"Search . . ."}
        style={{
          backgroundImage: img,
        }}
      />
      <SearchResults
        result={results}
        search={search}
        ref={(node) => {
          this.heading = node;
        }}
      />
    </div>
  );
}
