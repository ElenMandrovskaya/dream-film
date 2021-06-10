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
        const { data } = await axios.get(
        `/search/movie?api_key=${this.key}&page=${this.page}&query=${this.searchQuery}`,
        );
         const { results, total_pages, page, total_results } = data;
        return { results, total_pages, page, total_results };
    }

    async getTrendingMovies() {
        const { data } = await axios.get(
        `/trending/movie/week?api_key=${this.key}&page=${this.page}`,
    );
        const { results, total_pages, page, total_results } = data;
            return { results, total_pages, page, total_results };
    }
    incrementPage() {
        this.page += 1;
    }
    decrementPage() {
        this.page -= 1;
        }
    resetPage() {
        this.page = 1;
    }
    selectPage(num) {
        this.page = num;
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}


