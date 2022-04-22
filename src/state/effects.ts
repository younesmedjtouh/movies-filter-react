import {
    loadMoviesPending,
    loadMoviesSuccess,
    loadMoviesError,
    deleteMovieError,
    deleteMovieSuccess,
    loadCategoriesError,
    loadCategoriesSuccess,
    handleLike
} from "./actions";
import axios from 'axios';
import { Movie } from "../models/movie";

let baseUrl = "http://localhost:4000/api/";

export const loadMovies = (page: string | null, searchTerm: string, category: string[]) => {
    var params = new URLSearchParams();
    params.append("page", page || '');

    if (searchTerm !== '') {
        params.append("searchTerm", searchTerm);
    };
    if (category.length !== 0) {
        category.forEach((cat) => params.append("categories", cat));
    };

    return (dispatch: any) => {
        dispatch(loadMoviesPending());
        try {
            axios.get(baseUrl + "movies", { params })
                .then(res => {
                    dispatch(loadMoviesSuccess(res.data));
                })
        } catch (err) {
            dispatch(loadMoviesError(err));
        }
    };
};

export const deleteMovie = (id: string) => {
    return (dispatch: any) => {
        try {
            axios.delete(baseUrl + "movies/" + id)
                .then(res => {
                    if (res.status === 200) {
                        dispatch(deleteMovieSuccess(id));
                    }
                })
        } catch (err) {
            dispatch(deleteMovieError(err));
        }
    };
};

export const loadCategories = () => {
    return (dispatch: any) => {
        try {
            axios.get(baseUrl + 'categories')
                .then(res => {
                    dispatch(loadCategoriesSuccess(res.data));
                })
        } catch (err) {
            dispatch(loadCategoriesError(err));
        }
    };
};

export const updateMovie = (movie: Movie) => {
    return (dispatch: any) => {
        try {
            axios.put(baseUrl + "movies/" + movie.id, { movie })
                .then(res => {
                    if (res.status === 200) {
                        dispatch(handleLike(movie));
                    }
                })
        } catch (err) {

        }
    };
};