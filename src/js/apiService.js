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
    async getGenresList() {
    const { data } = await axios.get(`/genre/movie/list?api_key=${this.key}`);
    const { genres } = data;
    return genres;
    }
    async getTrendingMoviesWithGenre() {
        const data = await this.getTrendingMovies();
        // console.log(data)
        const genresList = await this.getGenresList();
        // console.log(genresList)
        data.results.map(obj => {
            const releaseYear = obj.release_date.slice(0, 4);
            obj.release_date = releaseYear;
            obj.vote_average = String(obj.vote_average).padEnd(3, '.0');
            // console.log(obj.vote_average);
        });
        data.results.map(genreId => {
            let genresArray = genreId.genre_ids.map(id => genresList.filter(el => el.id === id)).flat();
            if (genresArray.length > 3) {
                genresArray = genresArray.slice(0, 2);
  }
            genreId.genre_ids = genresArray;
            // console.log(genresArray)
        });
        const { results, total_pages, page, total_results } = data;
            return { results, total_pages, page, total_results };
    }
        async getMoviesWithGenre() {
        const data = await this.getMovies();
        // console.log(data)
        const genresList = await this.getGenresList();
        // console.log(genresList)
        data.results.map(obj => {
            const releaseYear = obj.release_date.slice(0, 4);
            obj.release_date = releaseYear;
            obj.vote_average = String(obj.vote_average).padEnd(3, '.0');
        });
        data.results.map(genreId => {
            let genresArray = genreId.genre_ids.map(id => genresList.filter(el => el.id === id)).flat();
            if (genresArray.length > 3) {
                genresArray = genresArray.slice(0, 2);
  }
            genreId.genre_ids = genresArray;
            // console.log(genresArray)
        });
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


