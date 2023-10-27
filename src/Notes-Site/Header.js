import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
				size ='1.3rem'
			>
				<i class="fa-solid fa-moon"></i>
			</button>
		</div>
	);
};

export default Header;