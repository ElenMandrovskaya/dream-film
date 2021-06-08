import { BASE_URL, API_KEY } from './constants';
import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

export default class MoviesApi {
    constructor() {
        this.url = BASE_URL;
        this.key = API_KEY;
        this.searchQuery = '';
        this.page = 1;
    }
    async getMovies() {
        return await axios(
            `${this.url}search/movie?api_key=${this.key}&query=${this.searchQuery}&language=en-US`,
        );
    }
    async getTrendingMovies() {
        return await axios(
      `${this.url}/trending/movie/day?&api_key=${this.key}&language=en-US&page=${this.page}`,
    );
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}


