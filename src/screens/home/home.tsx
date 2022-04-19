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
    this.props.loadMovies("1");
  }

  state = {
    searchTerm: "",
  };

  onLikeClicked = (item: Movie) => {
    const films = [...this.props.movies.moviesList];
    const index = films.indexOf(item);
    films[index].likes++;
    this.setState({ films });
  };

  onDisLikeClicked = (item: Movie) => {
    const films = [...this.props.movies.moviesList];
    const index = films.indexOf(item);
    films[index].dislikes++;
    this.setState({ films });
  };

  onDeleteClicked = (id: string) => {
    const films = this.props.movies.moviesList.filter((c) => c.id !== id);
    this.setState({ films });
  };

  changePage = (nbrPage: string | null) => {
    this.props.loadMovies(nbrPage);
  };

  render() {
    //if (!this.props.loadingMovies) return <div>loading</div>;
    return (
      <div className="container">
        <div className="card my-2 mx-2">
          <div className="card-body">
            <form>
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
              </div>
              <input
                className="btn w-100 btn-primary"
                type="submit"
                value="Search"
              />
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
