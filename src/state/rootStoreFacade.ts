import { MoviesState } from "../models/types";
import {
    loadMovies
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
        loadMovies: () => dispatch(loadMovies())
    };
};