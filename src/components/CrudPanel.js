import React from "react";

import "./styles/CrudPanel.css";

export const CrudPanel = ({ setQuery, setIsEditing, setPokeInfo }) => {
	const handleQuery = (e) => {
		e.preventDefault();
		const query = e.currentTarget.value;
		setQuery(query);
	};

	const handleCreation = (e) => {
		e.preventDefault();
		setPokeInfo(0);
		setIsEditing(true);
	};

	return (
		<div className="crud-panel">
			<div className="search-container">
				<i class="fa fa-search" aria-hidden="true"></i>
				<input
					type="text"
					role="search"
					className="search-bar"
					onChange={(e) => handleQuery(e)}
					placeholder="Buscar"
				/>
			</div>

			<div>
				<button
					role="create"
					className="create-button"
					onClick={(e) => handleCreation(e)}
				>
					<i class="fa fa-plus" aria-hidden="true"></i> Nuevo
				</button>
			</div>
		</div>
	);
};
