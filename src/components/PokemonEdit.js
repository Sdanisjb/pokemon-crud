import React, { useState, useEffect } from "react";
import { getPokemon } from "../services";

export const PokemonEdit = ({ setIsEditing, pokeInfo }) => {
	const [atk, setAtk] = useState(50);
	const [def, setDef] = useState(50);
	const [name, setName] = useState("");
	const [img, setImg] = useState("");

	const handleAtkChange = (e) => {
		e.preventDefault();
		const atkValue = e.currentTarget.value;
		setAtk(atkValue);
	};

	const handleDefChange = (e) => {
		e.preventDefault();
		const defValue = e.currentTarget.value;
		setDef(defValue);
	};

	const handleNameChange = (e) => {
		e.preventDefault();
		const nameValue = e.currentTarget.value;
		setName(nameValue);
	};

	const handleImgChange = (e) => {
		e.preventDefault();
		const nameValue = e.currentTarget.value;
		setImg(nameValue);
	};

	const handleIsEditing = (e) => {
		e.preventDefault();
		setIsEditing(false);
	};

	const handleSave = (e) => {
		e.preventDefault();
		if (pokeInfo === 0) {
			fetch("https://pokemon-pichincha.herokuapp.com/pokemons", {
				method: "POST",
				body: JSON.stringify({
					name: name,
					image: img,
					attack: atk,
					defense: def,
					hp: 100,
					idAuthor: 1,
					type: "water",
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((response) => response.json())
				.then((json) => console.log(json));
		} else {
			fetch("https://pokemon-pichincha.herokuapp.com/pokemons/" + pokeInfo, {
				method: "PUT",
				body: JSON.stringify({
					name: name,
					image: img,
					attack: atk,
					defense: def,
					hp: 100,
					idAuthor: 1,
					type: "water",
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((response) => response.json())
				.then((json) => console.log(json));
		}
	};

	useEffect(() => {
		getPokemon(pokeInfo)
			.then((response) => response.json())
			.then((data) => {
				setName(data.name);
				setImg(data.image);
				setAtk(data.attack);
				setDef(data.defense);
			});
	}, [pokeInfo]);

	return (
		<div role="pokemon-edit">
			<h2>Nuevo Pokemon</h2>
			<form role="pokemon-form">
				<div>
					<div>
						<label htmlFor="name-input">Nombre</label>
						<input
							id="name-input"
							type="text"
							defaultValue={name}
							onChange={(e) => handleNameChange(e)}
						/>
					</div>
					<div>
						<label htmlFor="img-input">Imagen</label>
						<input
							id="img-input"
							type="text"
							defaultValue={img}
							onChange={(e) => handleImgChange(e)}
						/>
					</div>
				</div>
				<div>
					<div>
						<label htmlFor="atk-input">Ataque</label>
						<input
							id="atk-input"
							type="range"
							defaultValue={atk}
							onChange={(e) => handleAtkChange(e)}
						/>
						<p role="atk-value">{atk}</p>
					</div>
					<div>
						<label htmlFor="def-input">Defensa</label>
						<input
							id="def-input"
							type="range"
							defaultValue={def}
							onChange={(e) => handleDefChange(e)}
						/>
						<p role="def-value">{def}</p>
					</div>
				</div>
			</form>
			<div>
				<button role="save-button" onClick={(e) => handleSave(e)}>
					Guardar
				</button>
				<button role="cancel-button" onClick={(e) => handleIsEditing(e)}>
					Cancelar
				</button>
			</div>
		</div>
	);
};
