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
        title: "Oceans 8",
        category: "Comedy",
        thumbnail: "1.jpg",
        likes: 4,
        dislikes: 1,
      },
      {
        id: "2",
        title: "Midnight Sun",
        category: "Comedy",
        thumbnail: "2.jpg",
        likes: 2,
        dislikes: 0,
      },
      {
        id: "3",
        title: "Les indestructibles 2",
        category: "Animation",
        thumbnail: "3.jpg",
        likes: 3,
        dislikes: 1,
      },
      {
        id: "4",
        title: "Sans un bruit",
        category: "Thriller",
        thumbnail: "4.jpg",
        likes: 6,
        dislikes: 6,
      },
      {
        id: "5",
        title: "Creed II",
        category: "Drame",
        thumbnail: "5.jpg",
        likes: 16,
        dislikes: 2,
      },
      {
        id: "6",
        title: "Gone Girl",
        category: "Thriller",
        thumbnail: "6.jpg",
        likes: 22,
        dislikes: 12,
      },
      {
        id: "7",
        title: "Pulp Fiction",
        category: "Thriller",
        thumbnail: "7.jpg",
        likes: 1233,
        dislikes: 32,
      },
      {
        id: "8",
        title: "Seven",
        category: "Thriller",
        thumbnail: "8.jpg",
        likes: 2,
        dislikes: 1,
      },
      {
        id: "9",
        title: "Inception",
        category: "Thriller",
        thumbnail: "9.jpg",
        likes: 2,
        dislikes: 1,
      },
    ],
  };

  onLikeClicked = (item: Movie) => {
    const films = [...this.state.films];
    const index = films.indexOf(item);
    films[index].likes++;
    this.setState({ films });
  };

  onDisLikeClicked = (item: Movie) => {
    const films = [...this.state.films];
    const index = films.indexOf(item);
    films[index].dislikes++;
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
