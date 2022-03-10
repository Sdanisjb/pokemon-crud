import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { PokemonEdit } from "../components/PokemonEdit";

beforeEach(() => render(<PokemonEdit />));

describe("PokemonEdit mount", () => {
	it("debe mostrar el formulario de edición'", () => {
		expect(screen.getByRole("pokemon-form")).toBeInTheDocument();
	});
	it("debe mostrar los campos del formulario de edición'", () => {
		expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
		expect(screen.getByLabelText("Imagen")).toBeInTheDocument();
		expect(screen.getByLabelText("Ataque")).toBeInTheDocument();
		expect(screen.getByLabelText("Defensa")).toBeInTheDocument();
	});
	it("debe mostrar los botones de guardar y cerrar", () => {
		expect(screen.getByRole("save-button")).toBeInTheDocument();
		expect(screen.getByRole("cancel-button")).toBeInTheDocument();
	});
});
