import Search from './Search';
import './Search.css';
import React, { useState } from 'react';

const filterPosts = (nonProfitsPosts, query) => {
	if (!query) {
		return nonProfitsPosts;
	}

	return nonProfitsPosts.filter((post) => {
		const postName = post.name.toLowerCase();
		return postName.includes(query);
	});
};

const SearchNonProfits = ({ orgs }) => {
	const [
		searchQuery,
		setSearchQuery
	] = useState('');
	const filteredPosts = filterPosts(orgs, searchQuery);

	return (
		<div>
			<Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<div className="cards">
				{filteredPosts.map((nonProfitsPosts) => (
					<div className="card">
						<img className="image" src={`./img/${nonProfitsPosts.img}`} alt={nonProfitsPosts.name} />
						<div className="cardName" key={nonProfitsPosts.key}>
							{nonProfitsPosts.name}
							<br />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchNonProfits;
