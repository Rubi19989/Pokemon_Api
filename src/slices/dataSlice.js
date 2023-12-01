import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setLoading } from './uiSlice';
import { getPokemon, getPokemonDetails } from '../Api';


const initialState = {
    pokemons: [],
    pokemonsFilterd: [],

}

export const fetchPokemonsWitDetails = createAsyncThunk(
    'data/fetchPokemonsWitDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true))
        const pokemonsRes = await getPokemon();
        const pokemonsDetailed = await Promise.all(
            pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
        );
        dispatch(setPokemons(pokemonsDetailed))
        dispatch(setLoading(false))

    }
);


export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload
        },

        setFavorite: (state, action) => {

            const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId;
            });

            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite

                state.pokemons[currentPokemonIndex].favorite = !isFavorite
            }
        },

        setBuscar: (state, action) => {
            const pokemonFilter = state.pokemonsFilterd.filter((pokemon) => 
                pokemon.name.includes(action.payload))

            state.pokemonsFilterd = pokemonFilter.toString().toLowerCase() ;
        },
    },
});


export const { setFavorite, setPokemons, setBuscar } = dataSlice.actions ;

export default dataSlice.reducer;