import React from "react";
import { render, screen } from "@testing-library/react";

import { MainPage } from "../components/MainPage";

beforeEach(() => render(<MainPage />));

describe("Main Page mount", () => {
	it("debe mostrar el título 'Listado de Pokemon'", () => {
		expect(
			screen.getByRole("heading", { name: /Listado de Pokemon/i })
		).toBeInTheDocument();
	});
});

describe("CRUD Panel Mount", () => {
	it("debe mostrar un input para realizar búsquedas", () => {
		expect(screen.getByRole("search")).toBeInTheDocument();
	});

	it("debe mostrar un botón con el texto Crear", () => {
		expect(screen.getByRole("create", { name: "Crear" })).toBeInTheDocument();
	});
});
