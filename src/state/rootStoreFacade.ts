import { MoviesState } from "../models/types";
import {
    loadMovies, deleteMovie, loadCategories
} from "./effects";
import {
    handleLike
} from "./actions"
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
        loadMovies: (page: string | null, searchTerm: string) => dispatch(loadMovies(page, searchTerm)),
        deleteMovie: (id: string, searchTerm: string) => dispatch(deleteMovie(id, searchTerm)),
        handleLike: (movie: Movie) => dispatch(handleLike(movie)),
        loadCategories: () => dispatch(loadCategories()),
    };
};