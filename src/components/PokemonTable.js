import React, { useEffect, useState } from "react";
import { getPokemons } from "../services/index";

import "./styles/PokemonTable.css";

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
		setPokeInfo(id);
		setIsEditing(true);
	};

	const handleDeleting = (e, id) => {
		e.preventDefault();
		fetch("https://pokemon-pichincha.herokuapp.com/pokemons/" + id, {
			method: "DELETE",
		})
			.then((response) => response.json())
			.then((json) => console.log(json));
	};

	return (
		<>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
			/>

			<table role="pokemon-table" className="pokemon-table">
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
							<td className="button-cell">
								<button onClick={(e) => handleEditing(e, pokemon.id)}>
									<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
								</button>
								<button onClick={(e) => handleDeleting(e, pokemon.id)}>
									<i class="fa fa-trash-o" aria-hidden="true"></i>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};
