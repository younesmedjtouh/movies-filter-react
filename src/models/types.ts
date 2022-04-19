import { MoviesList } from "./movie";

export interface MoviesState {
    movies: MoviesList,
    loadingMovies: boolean,
    error?: any,
}

export interface AppDispatch {
    loadMovies: () => any;
}