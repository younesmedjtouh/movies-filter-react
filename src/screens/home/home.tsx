import * as React from "react";
import { Component } from "react";
import FilmItem from "../../components/film/filmItem";
import { Movie } from "../../models/movie";

class Home extends Component {
  state = {
    searchTerm: "",
    films: [
      {
        id: "1",
        title: "Ocean's 8",
        category: "Comedy",
        image:
          "https://github.com/watch-janick/c4t-react-interview/blob/main/images/1.jpg?raw=true",
        imagealt: "Ocean's 8",
        nbrlikes: 500,
        nbrdislike: 2,
      } as Movie,
      {
        id: "2",
        title: "Midnight Sun",
        category: "Comedy",
        image:
          "https://github.com/watch-janick/c4t-react-interview/blob/main/images/2.jpg?raw=true",
        imagealt: "Midnight Sun",
        nbrlikes: 300,
        nbrdislike: 22,
      } as Movie,
      {
        id: "3",
        title: "les indestructible 2",
        category: "Comedy",
        image:
          "https://github.com/watch-janick/c4t-react-interview/blob/main/images/3.jpg?raw=true",
        imagealt: "les indestructible 2",
        nbrlikes: 300,
        nbrdislike: 22,
      } as Movie,
      {
        id: "4",
        title: "Sans un bruit",
        category: "Comedy",
        image:
          "https://github.com/watch-janick/c4t-react-interview/blob/main/images/4.jpg?raw=true",
        imagealt: "Sans un bruit",
        nbrlikes: 300,
        nbrdislike: 22,
      } as Movie,
      {
        id: "5",
        title: "Creed II",
        category: "Comedy",
        image:
          "https://github.com/watch-janick/c4t-react-interview/blob/main/images/5.jpg?raw=true",
        imagealt: "Creed II",
        nbrlikes: 300,
        nbrdislike: 22,
      } as Movie,
    ],
  };

  onLikeClicked = (item: Movie) => {
    const films = [...this.state.films];
    const index = films.indexOf(item);
    films[index].nbrlikes++;
    this.setState({ films });
  };

  onDisLikeClicked = (item: Movie) => {
    const films = [...this.state.films];
    const index = films.indexOf(item);
    films[index].nbrdislike++;
    this.setState({ films });
  };

  onDeleteClicked = (id: string) => {
    const films = this.state.films.filter((c) => c.id !== id);
    this.setState({ films });
  };

  render() {
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
                />
                <input
                  className="btn w-100 btn-primary"
                  type="submit"
                  value="Search"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {this.state.films.map((item) => (
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

export default Home;
