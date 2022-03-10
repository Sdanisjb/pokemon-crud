import React, { useState } from "react";
import { CrudPanel } from "./CrudPanel";
import { PokemonEdit } from "./PokemonEdit";
import { PokemonTable } from "./PokemonTable";

export const MainPage = () => {
	const [query, setQuery] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [pokeInfo, setPokeInfo] = useState(0);
	return (
		<>
			<h1>Listado de Pokemon</h1>
			<CrudPanel setQuery={setQuery} setIsEditing={setIsEditing} />
			<PokemonTable
				query={query}
				setIsEditing={setIsEditing}
				setPokeInfo={setPokeInfo}
			/>
			{isEditing && (
				<PokemonEdit setIsEditing={setIsEditing} pokeInfo={pokeInfo} />
			)}
		</>
	);
};
