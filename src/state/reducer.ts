import { MoviesState } from "../models/types";
import { Reducer } from "redux";
import {
    LoadMoviesPending,
    LoadMoviesSuccess,
    LoadMoviesError,
} from "./actions";
import { Pager } from "../models/movie";

const initialState: MoviesState = {
    movies: { pager: {} as Pager, moviesList: [] },
    loadingMovies: false,
    error: null,
};

const rootReducer: Reducer<MoviesState> = (state = initialState, action) => {
    switch (action.type) {
        case LoadMoviesPending:
            return {
                ...state,
                loadingMovies: true,
            };
        case LoadMoviesSuccess:
            return {
                ...state,
                loadingMovies: false,
                movies: action.payload,
            };
        case LoadMoviesError:
            return {
                ...state,
                loadingMovies: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;