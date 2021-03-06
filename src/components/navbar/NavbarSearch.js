import React, { useEffect, useRef, useState } from "react";
import NonProfitsData from "../non-profits-data/NonProfitsData";
import { useNavigate } from "react-router-dom";
import "./navbarSearch.css";
import { uppercaseFirstLetter } from "../../lib/upperCaseFirstLetter";
import { goToTop } from "../../lib/toTop";

function useOutsideAlerter(ref) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        (ref.current && !ref.current.contains(event.target)) ||
        ref.current.firstChild.value === ""
      ) {
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
    const path = "/nonprofit/" + name.replace(/ /g, "");
    props.setSearch("");
    navigate(path);
    goToTop();
  }

  if (props.search === "") {
    return <div className={"results-search"} style={{ display: "none" }} />;
  } else {
    return (
      <div className={"results-search"} style={{ display: "block" }}>
        {results.length === 0 && (
          <p style={{ marginLeft: "20px" }}>No results...</p>
        )}
        {results.length !== 0 && (
          <ul className={"search-results"}>
            {results.map((nonprofit) => (
              <li
                tabIndex="0"
                style={{ textStyle: "none" }}
                onClick={() => {
                  redirectNonprofit(nonprofit.name);
                }}
              >
                <img
                  className={"search-icon"}
                  src={process.env.PUBLIC_URL + nonprofit.img}
                  alt="icon"
                />
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

export function NavbarSearch() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

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
  const img = "url(" + process.env.PUBLIC_URL + "/img/icons/searchicon.png)";

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
      <SearchResults result={results} search={search} setSearch={setSearch} />
    </div>
  );
}
