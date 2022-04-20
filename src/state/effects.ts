import {
    loadMoviesPending,
    loadMoviesSuccess,
    loadMoviesError,
    deleteMovieError,
    deleteMovieSuccess,
    loadCategoriesError,
    loadCategoriesSuccess
} from "./actions";

export const loadMovies = (page: string | null, searchTerm: string) => {
    let baseUrl = "http://localhost:4000/api/movies?page=" + page;
    if (searchTerm != null) {
        baseUrl = baseUrl + "&searchTerm=" + searchTerm;
    }
    return (dispatch: any) => {
        dispatch(loadMoviesPending());
        fetch(baseUrl)
            .then((res) => res.json())
            .then((res) => {
                dispatch(loadMoviesSuccess(res));
            })
            .catch((err) => {
                dispatch(loadMoviesError(err));
            });
    };
};

export const deleteMovie = (id: string, searchTerm: string) => {
    let baseUrl = "http://localhost:4000/api/movies/" + id;
    if (searchTerm != null) {
        baseUrl = baseUrl + "?searchTerm=" + searchTerm;
    }
    return (dispatch: any) => {
        fetch(baseUrl, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                dispatch(deleteMovieSuccess(res));
            })
            .catch((err) => {
                alert("error: " + JSON.stringify(err));
                dispatch(deleteMovieError(err));
            });
    };
};

export const loadCategories = () => {
    return (dispatch: any) => {
        fetch("http://localhost:4000/api/categories")
            .then((res) => res.json())
            .then((res) => {
                dispatch(loadCategoriesSuccess(res));
            })
            .catch((err) => {
                dispatch(loadCategoriesError(err));
            });
    };
};