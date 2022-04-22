import { MoviesState } from "../models/types";
import { Reducer } from "redux";
import {
    LoadMoviesPending,
    LoadMoviesSuccess,
    LoadMoviesError,
    DeleteMovieError,
    DeleteMovieSuccess,
    HandleLike,
    LoadCategoriesError,
    LoadCategoriesSuccess
} from "./actions";
import { Pager } from "../models/movie";

const initialState: MoviesState = {
    movies: { pager: {} as Pager, moviesList: [] },
    categories: [] as string[],
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
                movies: {
                    ...state.movies,
                    moviesList: state.movies.moviesList.filter((movie) => movie.id !== action.id)
                }
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
        case LoadCategoriesSuccess:
            return {
                ...state,
                categories: action.payload,
            };
        case LoadCategoriesError:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;