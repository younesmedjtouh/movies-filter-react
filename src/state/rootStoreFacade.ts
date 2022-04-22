import { MoviesState } from "../models/types";
import {
    loadMovies, deleteMovie, loadCategories, updateMovie
} from "./effects";
import { Movie } from "../models/movie";

export const mapStateToProps = (state: MoviesState) => {
    return {
        movies: state.movies,
        loadingMovies: state.loadingMovies,
        categories: state.categories,
        error: state.error,
    };
};

export const mapDispatchToProps = (dispatch: any) => {
    return {
        loadMovies: (page: string | null, searchTerm: string, category: string[]) => dispatch(loadMovies(page, searchTerm, category)),
        deleteMovie: (id: string) => dispatch(deleteMovie(id)),
        loadCategories: () => dispatch(loadCategories()),
        updateMovie: (movie: Movie) => dispatch(updateMovie(movie)),
    };
};