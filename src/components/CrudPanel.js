import React from "react";

export const CrudPanel = ({ setQuery, setIsEditing }) => {
	const handleQuery = (e) => {
		e.preventDefault();
		const query = e.currentTarget.value;
		setQuery(query);
	};

	const handleCreation = (e) => {
		e.preventDefault();
		setIsEditing(true);
	};

	return (
		<div>
			<div>
				<input type="text" role="search" onChange={(e) => handleQuery(e)} />
			</div>

			<div>
				<button role="create" onClick={(e) => handleCreation(e)}>
					Crear
				</button>
			</div>
		</div>
	);
};
