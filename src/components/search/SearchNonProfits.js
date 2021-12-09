import Search from './Search';
import './Search.css';
import nonProfitsPosts from './NonProfitsData';

const { search } = window.location;
const query = new URLSearchParams(search).get('s');

const filterPosts = (nonProfitsPosts, query) => {
  if (!query) {
      return nonProfitsPosts;
  }

  return nonProfitsPosts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
  });
};

const SearchNonProfits = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const filteredPosts = filterPosts(nonProfitsPosts, query);

  return (
      <div>
          <h1 className="headline">Our non-profits</h1>
            <Search />
            <ul>
                {filteredPosts.map(nonProfitsPosts => (
                    <div className="card" key={nonProfitsPosts.key}>
                      {nonProfitsPosts.name}
                      <img className="image" src={nonProfitsPosts.img} alt={nonProfitsPosts.name}/>
                    </div>
                ))}
            </ul>
      </div>
  );
}

export default SearchNonProfits;