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
