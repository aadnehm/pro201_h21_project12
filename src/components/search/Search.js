const SearchBar = ({ searchQuery, setSearchQuery }) => (    
    <form style={{ marginTop: '4vh', textAlign: 'center'}}action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search non-profits</span>
        </label>
        <input 
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            style={{width: '30%', height: '5vh', fontSize: '2.5rem'}}
            type="text"
            id="header-search"
            placeholder="Search non-profits"
            name="s" 
        />
        <button style={{height: '5.5vh', fontSize: '2.5rem', marginLeft: '1vw'}}type="submit">Search</button>
    </form>
);

export default SearchBar;