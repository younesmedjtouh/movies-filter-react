import {
    loadMoviesPending,
    loadMoviesSuccess,
    loadMoviesError,
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