import axios from "axios";

const getPokemon = async (name) => {
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return data;
}
export default {getPokemon};