import { MoviesList } from "./movie";

export interface MoviesState {
    movies: MoviesList,
    loadingMovies: boolean,
    error?: any,
}

export interface AppDispatch {
    loadMovies: (page: string | null) => any;
    deleteMovie: (id: string) => any;
}