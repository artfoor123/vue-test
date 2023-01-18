import axios from 'axios';
const getPakamonAll = (limit : number  , offset : number) => {
        return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then((res) => {
            return res.data;
        });
    }
const getUrlImg = () =>{
        return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
}

export {
    getPakamonAll,
    getUrlImg
}