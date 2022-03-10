import React from "react";
import { render, screen, fireEvent, getByRole } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MainPage } from "../components/MainPage";

//Implementación de un mock server para probar los getRequest en una tabla

beforeAll(() => render(<MainPage />));

const server = setupServer(
	rest.get("/pokemons", (req, res, ctx) => {
		const pokemonName = req.url.searchParams.get("name");
		return res(
			ctx.json([
				{
					id: 1013,
					name: pokemonName,
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
					id: 1013,
					name: pokemonName,
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

describe("Mostrar pokemones por nombre", () => {
	it("debe mostrar los pokemones de acuerdo al nombre que se consulte", () => {
		const [firstPoke, secondPoke] = screen.getAllByRole("pokemon-name");
		expect(firstPoke.textContent).toBe(screen.getByRole("search").value);
		expect(secondPoke.textContent).toBe(screen.getByRole("search").value);
	});
});
