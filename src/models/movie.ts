export interface Movie {
    id: string;
    title: string;
    category: string;
    thumbnail: string;
    likes: number;
    dislikes: number;
    likeActive: boolean,
    dislikeActive: boolean
}

export interface Pager {
    currentPage: number;
    endIndex: number;
    endPage: number;
    pageSize: number;
    pages: number[];
    startIndex: number;
    startPage: number;
    totalItems: number;
    totalPages: number;
}

export interface MoviesList {
    pager: Pager;
    moviesList: Movie[];
}