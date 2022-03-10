import React, { useState } from "react";
import { CrudPanel } from "./CrudPanel";
import { PokemonEdit } from "./PokemonEdit";
import { PokemonTable } from "./PokemonTable";

export const MainPage = () => {
	const [query, setQuery] = useState("");

	return (
		<>
			<h1>Listado de Pokemon</h1>
			<CrudPanel setQuery={setQuery} />
			<PokemonTable query={query} />
			<PokemonEdit />
		</>
	);
};
