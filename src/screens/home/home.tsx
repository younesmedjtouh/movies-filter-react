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

type AllProps = MoviesState & AppDispatch;

class Home extends Component<AllProps> {
  constructor(props: AllProps) {
    super(props);
    this.props.loadMovies();
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
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
