const SearchBar = ({ searchQuery, setSearchQuery }) => (    
    <form style={{ marginTop: '4vh', textAlign: 'center'}}action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Find a non-profit</span>
        </label>
        <input 
            className="search-bar"
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            placeholder="🔎 Find a non-profit"
        />
    </form>
);

export default SearchBar;