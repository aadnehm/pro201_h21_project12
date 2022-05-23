import React, { useEffect, useRef, useState } from "react";
import NonProfitsData from "../search/NonProfitsData";
import { useNavigate } from "react-router-dom";
import "./navbarSearch.css";

function useOutsideAlerter(ref) {
  useEffect(() => {
    function handleClickOutside(event) {
      console.log();
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

export const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

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
  } else if (results.length === 0) {
    return (
      <div className={"results-search"}>
        <p style={{ marginLeft: "20px" }}>No results...</p>
      </div>
    );
  } else {
    return (
      <div className={"results-search"} style={{ display: "block" }}>
        {results.length === 0 && <p>No results...</p>}
        {results.length !== 0 && (
          <ul className={"search-results"}>
            {results.map((nonprofit) => (
              <li
                tabindex="0"
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

export function uppercaseFirstLetter(string) {
  const string2 = string.charAt(0).toUpperCase() + string.slice(1);
  return string2;
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
  const img = "url(" + process.env.PUBLIC_URL + "/img/searchicon.png)";

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
