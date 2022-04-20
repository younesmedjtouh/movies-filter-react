import { MoviesState } from "../models/types";
import { Reducer } from "redux";
import {
    LoadMoviesPending,
    LoadMoviesSuccess,
    LoadMoviesError,
    DeleteMovieError,
    DeleteMovieSuccess,
    HandleLike
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
        case DeleteMovieSuccess:
            return {
                ...state,
                movies: action.payload
            };
        case DeleteMovieError:
            return {
                ...state,
                error: action.payload,
            };
        case HandleLike:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    moviesList: state.movies.moviesList.map((movie) => movie.id === action.payload.id ? action.payload : movie)
                }
            };
        default:
            return state;
    }
};

export default rootReducer;