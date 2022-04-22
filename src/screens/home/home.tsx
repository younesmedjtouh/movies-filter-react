import React, { useState, useEffect } from "react";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../state/rootStoreFacade";
import { connect } from "react-redux";
import FilmItem from "../../components/film/filmItem";
import PaginationComponent from "../../components/pagination";
import { Movie } from "../../models/movie";
import { AppDispatch, MoviesState } from "../../models/types";
import { Spinner } from "react-bootstrap";

type AllProps = MoviesState & AppDispatch;

function Home(props: AllProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState([] as string[]);
  const [page, setPage] = useState("1" as string | null);

  useEffect(() => {
    props.loadCategories();
    props.loadMovies(page, searchTerm, category);
  }, [page]);

  const onLikeClicked = (movie: Movie) => {
    if (movie.dislikeActive) {
      movie.dislikes--;
      movie.dislikeActive = !movie.dislikeActive;
    }
    movie.likeActive = !movie.likeActive;
    movie.likes++;
    props.updateMovie(movie);
  };

  const onDisLikeClicked = (movie: Movie) => {
    if (movie.likeActive) {
      movie.likes--;
      movie.likeActive = !movie.likeActive;
    }
    movie.dislikeActive = !movie.dislikeActive;
    movie.dislikes++;
    props.updateMovie(movie);
  };

  const onDeleteClicked = (id: string) => {
    props.deleteMovie(id, searchTerm, category);
  };

  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.loadMovies("1", searchTerm, category);
  };

  const handleChange = (e: any) => {
    let sel = category;
    let find = sel.indexOf(e.target.value);
    if (find > -1) {
      sel.splice(find, 1);
    } else {
      sel.push(e.target.value);
    }

    setCategory(sel);
  };

  return (
    <div className="container">
      <div className="card my-2">
        <div className="card-body bg-light">
          <form onSubmit={(e) => search(e)}>
            <div className="row g-2">
              <input
                type="text"
                placeholder="Titre du film..."
                className="form-control"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="row">
                {props.categories.map((cat, index) => {
                  return (
                    <div className="col-md-3 col-sm-6" key={index}>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="categories"
                          value={cat}
                          id="flexCheckDefault"
                          onChange={(e) => handleChange(e)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          {cat}
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
              <input
                className="btn btn-primary mt-2"
                type="submit"
                value="Search"
              />
            </div>
          </form>
        </div>
      </div>
      {props.loadingMovies ? (
        <Spinner
          animation="border"
          role="status"
          variant="primary"
          className="d-flex justify-content-center"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <div className="row">
            {props.movies.moviesList.map((item) => (
              <div
                key={item.id}
                className="col-lg-4 col-md-4 col-sm-6 rounded-lg"
              >
                <FilmItem
                  film={item}
                  onLike={(e) => onLikeClicked(e)}
                  onDisLike={(e) => onDisLikeClicked(e)}
                  onDelete={(e) => onDeleteClicked(e)}
                />
              </div>
            ))}
          </div>
          {props.movies.moviesList.length > 0 ? (
            <PaginationComponent
              pager={props.movies.pager}
              changePage={(e) => setPage(e)}
            />
          ) : null}
        </>
      )}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
