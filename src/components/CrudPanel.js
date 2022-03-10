import React from "react";

export const CrudPanel = ({ setQuery }) => {
	const handleQuery = (e) => {
		e.preventDefault();
		const query = e.currentTarget.value;
		setQuery(query);
	};

	return (
		<div>
			<div>
				<input type="text" role="search" onChange={(e) => handleQuery(e)} />
			</div>

			<div>
				<button role="create">Crear</button>
			</div>
		</div>
	);
};
