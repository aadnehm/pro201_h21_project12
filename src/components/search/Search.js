import React from "react";
// MUI
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <header className="search-bar">
    <div className="search">
      <label htmlFor="header-search">
        <span className="visually-hidden">Find a non-profit</span>
      </label>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Find a non-profit"
        size="large"
      />
    </div>
    <div className="filter">
      <Button
        variant="contained"
        color="secondary"
        endIcon={<FilterListIcon />}
      >
        Filter
      </Button>
    </div>
  </header>
);

export default SearchBar;
