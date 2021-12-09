const SearchBar = () => (
    <form style={{marginLeft: '37vw', marginTop: '20vh'}}action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search non-profits</span>
        </label>
        <input 
            style={{width: '18vw', height: '5vh', fontSize: '2.5rem'}}
            type="text"
            id="header-search"
            placeholder="Search non-profits"
            name="s" 
        />
        <button style={{height: '5.5vh', fontSize: '2.5rem', marginLeft: '1vw'}}type="submit">Search</button>
    </form>
);

export default SearchBar;