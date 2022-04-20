import { Movie, MoviesList } from "../models/movie";

export const LoadMoviesPending = "LoadMoviesPending";
export const LoadMoviesSuccess = "LoadMoviesSuccess";
export const LoadMoviesError = "LoadMoviesError";
export const DeleteMovieSuccess = "DeleteMovieSuccess";
export const DeleteMovieError = "DeleteMovieError";
export const HandleLike = "HandleLike";


export const loadMoviesPending = () => {
    return { type: LoadMoviesPending };
};

export const loadMoviesSuccess = (moviesList: MoviesList) => {
    return { type: LoadMoviesSuccess, payload: moviesList };
};

export const loadMoviesError = (error: any) => {
    return { type: LoadMoviesError, payload: error };
};

export const deleteMovieSuccess = (id: string) => {
    return { type: DeleteMovieSuccess, payload: id };
};

export const deleteMovieError = (error: any) => {
    return { type: DeleteMovieError, payload: error };
};

export const handleLike = (movie: Movie) => {
    return { type: HandleLike, payload: movie };
};