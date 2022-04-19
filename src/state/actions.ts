import { MoviesList } from "../models/movie";

export const LoadMoviesPending = "LoadMoviesPending";
export const LoadMoviesSuccess = "LoadMoviesSuccess";
export const LoadMoviesError = "LoadMoviesError";

export const loadMoviesPending = () => {
    return { type: LoadMoviesPending };
};

export const loadMoviesSuccess = (moviesList: MoviesList) => {
    return { type: LoadMoviesSuccess, payload: moviesList };
};

export const loadMoviesError = (error: any) => {
    return { type: LoadMoviesError, payload: error };
};