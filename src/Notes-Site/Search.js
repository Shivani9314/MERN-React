import React from 'react';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
            <p className='search-icon' size = '1.3rem'><i class="fa-solid fa-magnifying-glass"></i></p>
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;