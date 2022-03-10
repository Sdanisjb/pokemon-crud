import React from "react";
import {
	render,
	screen,
	fireEvent,
	getByRole,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MainPage } from "../components/MainPage";

//Implementación de un mock server para probar los getRequest en una tabla

const server = setupServer(
	rest.get("/pokemons", (req, res, ctx) => {
		const pokeName = req.url.searchParams.get("name");
		return res(
			ctx.json([
				{
					id: 1013,
					name: pokeName,
					image:
						"https://terrigen-cdn-dev.marvel.com/content/prod/1x/017lok_ons_crd_03.jpg",
					type: "water",
					hp: 50,
					attack: 50,
					defense: 50,
					idAuthor: 1,
					created_at: "2022-03-09T20:35:29.430Z",
					updated_at: "2022-03-09T20:35:29.430Z",
				},
				{
					id: 1014,
					name: pokeName,
					image:
						"https://terrigen-cdn-dev.marvel.com/content/prod/1x/017lok_ons_crd_03.jpg",
					type: "water",
					hp: 50,
					attack: 50,
					defense: 50,
					idAuthor: 1,
					created_at: "2022-03-09T20:35:29.430Z",
					updated_at: "2022-03-09T20:35:29.430Z",
				},
			])
		);
	})
);

beforeAll(() => server.listen());
afterAll(() => server.close());

//Setup para cambiar el valor de la caja de búsqueda

const setupNameSearcher = () => {
	let utils = null;
	act(() => {
		utils = render(<MainPage />);
	});
	const input = utils.getByRole("search");
	return {
		input,
		...utils,
	};
};

describe("Mostrar pokemones por nombre", () => {
	it("debe mostrar los pokemones de acuerdo al nombre que se consulte", async () => {
		const { input } = setupNameSearcher();
		act(() => {
			fireEvent.change(input, { target: { value: "Pikachu" } });
		});
		await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));
		const [firstPoke, secondPoke] = screen.getAllByRole("pokemon-name");
		expect(firstPoke.textContent).toBe(input.value);
		expect(secondPoke.textContent).toBe(input.value);
	});
});
