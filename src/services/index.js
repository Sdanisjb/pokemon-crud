const baseUrl =
	process.env.NODE_ENV !== "test"
		? "https://pokemon-pichincha.herokuapp.com"
		: "";

export const getPokemons = (name) => fetch(baseUrl + "/pokemons/?name=" + name);

export const getPokemon = (id) => fetch(baseUrl + "/pokemons/" + id);
