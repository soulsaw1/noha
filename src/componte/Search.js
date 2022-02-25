import React from 'react'

function Search ({ handleInput, search }) {
	return (
		<section className="searchbox-wrap">
			<input 
				type="text" 
				placeholder="Search movie here" 
				className="text" 
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
	)
}

export default Search