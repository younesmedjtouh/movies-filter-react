import * as React from "react";
import { Component } from "react";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../state/rootStoreFacade";
import { connect } from "react-redux";
import FilmItem from "../../components/film/filmItem";
import { Movie } from "../../models/movie";
import { AppDispatch, MoviesState } from "../../models/types";
import { Spinner, Pagination } from "react-bootstrap";

type AllProps = MoviesState & AppDispatch;

class Home extends Component<AllProps> {
  constructor(props: AllProps) {
    super(props);
    this.props.loadMovies("1", this.state.searchTerm);
    this.props.loadCategories();
  }

  state = {
    searchTerm: "",
    categoriesItem: [] as string[],
  };

  onLikeClicked = (movie: Movie) => {
    if (movie.dislikeActive) {
      movie.dislikes--;
      movie.dislikeActive = !movie.dislikeActive;
    }
    movie.likeActive = !movie.likeActive;
    movie.likes++;
    this.props.handleLike(movie);
  };

  onDisLikeClicked = (movie: Movie) => {
    if (movie.likeActive) {
      movie.likes--;
      movie.likeActive = !movie.likeActive;
    }
    movie.dislikeActive = !movie.dislikeActive;
    movie.dislikes++;
    this.props.handleLike(movie);
  };

  onDeleteClicked = (id: string) => {
    this.props.deleteMovie(id, this.state.searchTerm);
  };

  changePage = (nbrPage: string | null) => {
    this.props.loadMovies(nbrPage, this.state.searchTerm);
  };

  search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.loadMovies("1", this.state.searchTerm);
  };

  handleChange = (e: any) => {
    let sel = this.state.categoriesItem;
    let find = sel.indexOf(e.target.value);
    if (find > -1) {
      sel.splice(find, 1);
    } else {
      sel.push(e.target.value);
    }

    this.setState({
      selections: sel,
    });
    console.log(this.state.categoriesItem);
  };

  render() {
    //if (!this.props.loadingMovies) return <div>loading</div>;
    return (
      <div className="container">
        <div className="card my-2 mx-2">
          <div className="card-body">
            <form onSubmit={this.search}>
              <div className="row g-2">
                <input
                  type="text"
                  placeholder="Titre du film..."
                  className="form-control"
                  value={this.state.searchTerm}
                  onChange={(e) =>
                    this.setState({ searchTerm: e.target.value })
                  }
                />
                <div className="row">
                  {this.props.categories.map((cat, index) => {
                    return (
                      <div className="col-md-3">
                        <div className="form-check m-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="categories"
                            value={cat}
                            id="flexCheckDefault"
                            onChange={this.handleChange}
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
        {this.props.loadingMovies ? (
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
            <div className="d-flex flex-wrap">
              {this.props.movies.moviesList.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-4 col-sm-6">
                  <FilmItem
                    film={item}
                    onLike={this.onLikeClicked}
                    onDisLike={this.onDisLikeClicked}
                    onDelete={this.onDeleteClicked}
                  />
                </div>
              ))}
            </div>
            <Pagination className="d-flex justify-content-center">
              {this.props.movies.pager.pages.map((page) => (
                <Pagination.Item
                  key={page}
                  active={page === this.props.movies.pager.currentPage}
                  onClick={(e) => this.changePage(e.currentTarget.textContent)}
                >
                  {page}
                </Pagination.Item>
              ))}
            </Pagination>
          </>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
