// Core
import { get } from './api';


export const fetchPokemon = (id) => get(`/pokemon/${id}`);

