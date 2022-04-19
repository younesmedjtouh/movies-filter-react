import {
    loadMoviesPending,
    loadMoviesSuccess,
    loadMoviesError,
    deleteMovieError,
    deleteMovieSuccess
} from "./actions";

export const loadMovies = (page: string | null) => {
    return (dispatch: any) => {
        dispatch(loadMoviesPending());
        fetch("http://localhost:4000/api/movies?page=" + page)
            .then((res) => res.json())
            .then((res) => {
                dispatch(loadMoviesSuccess(res));
            })
            .catch((err) => {
                dispatch(loadMoviesError(err));
            });
    };
};

export const deleteMovie = (id: string) => {
    return (dispatch: any) => {
        fetch("http://localhost:4000/api/movies/" + id, {
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