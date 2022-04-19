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
        loadMovies: (page: string | null, searchTerm: string) => dispatch(loadMovies(page, searchTerm)),
        deleteMovie: (id: string, searchTerm: string) => dispatch(deleteMovie(id, searchTerm))
    };
};