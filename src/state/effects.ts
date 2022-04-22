import {
    loadMoviesPending,
    loadMoviesSuccess,
    loadMoviesError,
    deleteMovieError,
    deleteMovieSuccess,
    loadCategoriesError,
    loadCategoriesSuccess
} from "./actions";
import axios from 'axios';

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

export const deleteMovie = (id: string, searchTerm: string, category: string[]) => {
    var params = new URLSearchParams();
    params.append("id", id);
    if (searchTerm !== '') {
        params.append("searchTerm", searchTerm);
    };
    if (category.length !== 0) {
        category.forEach((cat) => params.append("categories", cat));
    }
    return (dispatch: any) => {
        try {
            axios.delete(baseUrl + "movies", { params })
                .then(res => {
                    dispatch(deleteMovieSuccess(res.data));
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