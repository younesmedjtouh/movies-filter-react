import { MoviesState } from "../models/types";
import {
    loadMovies, deleteMovie
} from "./effects";

export const mapStateToProps = (state: MoviesState) => {
    return {
        movies: state.movies,
        loadingMovies: state.loadingMovies,
        error: state.error,
    };
};

export const mapDispatchToProps = (dispatch: any) => {
    return {
        loadMovies: (page: string | null) => dispatch(loadMovies(page)),
        deleteMovie: (id: string) => dispatch(deleteMovie(id))
    };
};