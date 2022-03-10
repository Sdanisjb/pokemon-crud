import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { MainPage } from "../components/MainPage";

beforeEach(() => render(<MainPage />));

describe("EditPokemon revision de renderizado condicional", () => {
	it("debe estar oculto al comienzo de la aplicación", () => {
		const editScreen = screen.queryByText("Nuevo Pokemon");
		expect(editScreen).toBeNull();
	});

	it("debe mostrar la pantalla de nuevo pokemon cuando se cliquea en crear", () => {
		fireEvent.click(screen.getByRole("create"));
		const editScreen = screen.queryByRole("pokemon-edit");
		expect(editScreen).toBeInTheDocument();
	});

	it("debe ocultar la pantalla de nuevo pokemon cuando se cliquea en cancelar", () => {
		fireEvent.click(screen.getByRole("create"));
		fireEvent.click(screen.getByRole("cancel-button"));
		const editScreen = screen.queryByText("Nuevo Pokemon");
		expect(editScreen).toBeNull();
	});
});
