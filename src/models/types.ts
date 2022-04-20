import { Movie, MoviesList } from "./movie";

export interface MoviesState {
    movies: MoviesList,
    loadingMovies: boolean,
    categories: string[],
    error?: any,
}

export interface AppDispatch {
    loadMovies: (page: string | null, searchTerm: string) => any;
    deleteMovie: (id: string, searchTerm: string) => any;
    handleLike: (movie: Movie) => any;
    loadCategories: () => any;
}