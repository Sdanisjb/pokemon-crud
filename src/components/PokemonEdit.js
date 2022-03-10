import React, { useState } from "react";

export const PokemonEdit = () => {
	const [atk, setAtk] = useState(50);
	const [def, setDef] = useState(50);

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

	return (
		<div role="pokemon-edit">
			<h2>Nuevo Pokemon</h2>
			<form role="pokemon-form">
				<div>
					<div>
						<label htmlFor="name-input">Nombre</label>
						<input id="name-input" type="text" />
					</div>
					<div>
						<label htmlFor="img-input">Imagen</label>
						<input id="img-input" type="text" />
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
				<button role="save-button">Guardar</button>
				<button role="cancel-button">Cancelar</button>
			</div>
		</div>
	);
};
