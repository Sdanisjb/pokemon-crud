import React from "react";
import { CrudPanel } from "./CrudPanel";
import { PokemonEdit } from "./PokemonEdit";
import { PokemonTable } from "./PokemonTable";

export const MainPage = () => {
	return (
		<>
			<h1>Listado de Pokemon</h1>
			<CrudPanel />
			<PokemonTable />
			<PokemonEdit />
		</>
	);
};
