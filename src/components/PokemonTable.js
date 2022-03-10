import React, { useEffect, useState } from "react";
import { getPokemons } from "../services/index";

export const PokemonTable = ({ query, setIsEditing, setPokeInfo }) => {
	const [pokemons, setPokemons] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getPokemons(query)
			.then((response) => response.json())
			.then((data) => setPokemons(data))
			.finally(() => setIsLoading(false));
	}, [query]);

	const handleEditing = (e, id) => {
		e.preventDefault();
		setIsEditing(true);
		setPokeInfo(id);
	};

	return (
		<table role="pokemon-table">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Imagen</th>
					<th>Ataque</th>
					<th>Defensa</th>
					<th>Acciones</th>
				</tr>
			</thead>

			<tbody>
				{isLoading && <tr>Loading...</tr>}
				{pokemons.map((pokemon) => (
					<tr key={pokemon.id}>
						<td role="pokemon-name">{pokemon.name}</td>
						<td>
							<img src={pokemon.image} alt={pokemon.name} />
						</td>
						<td>{pokemon.attack}</td>
						<td>{pokemon.defense}</td>
						<td>
							<button onClick={(e) => handleEditing(e, pokemon.id)}>
								Edit
							</button>
							<button>Delete</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
