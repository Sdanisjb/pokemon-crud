import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { PokemonEdit } from "../components/PokemonEdit";

//Test que comprueban las funcionalidades de los sliders

const setupAtkSlider = () => {
	const utils = render(<PokemonEdit />);
	const input = utils.getByLabelText("Ataque");
	return {
		input,
		...utils,
	};
};

const setupDefSlider = () => {
	const utils = render(<PokemonEdit />);
	const input = utils.getByLabelText("Defensa");
	return {
		input,
		...utils,
	};
};

describe("Sliders functionality", () => {
	it("el tag p acompañando al slider de ataque, debe mostrar su valor", () => {
		const { input } = setupAtkSlider();
		fireEvent.change(input, { target: { value: "45" } });
		expect(screen.getByRole("atk-value").textContent).toBe(input.value);
	});

	it("el tag p acompañando al slider de defensa, debe mostrar su valor", () => {
		const { input } = setupDefSlider();
		fireEvent.change(input, { target: { value: "45" } });
		expect(screen.getByRole("def-value").textContent).toBe(input.value);
	});
});
