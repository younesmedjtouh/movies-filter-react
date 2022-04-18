import * as React from "react";
import { Movie } from "../../models/movie";
import "./filmItem.css";

type Props = {
  film: Movie;
  onLike: (item: Movie) => void;
  onDisLike: (item: Movie) => void;
  onDelete: (id: string) => void;
};

function FilmItem(props: Props) {
  return (
    <div className="container pb-1">
      <div className="card">
        <div className="product-image">
          <img
            src={props.film.thumbnail}
            alt={props.film.title}
            className="img-fluid"
          />
        </div>
        <button
          className="btn-wishlist"
          type="button"
          onClick={() => props.onDelete(props.film.id)}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
        <div className="card-body py-2">
          <h3 className="font-size-xm">{props.film.title}</h3>
          <div className="row">
            <p className="col font-size-xs">{props.film.category}</p>
            <div className="col">
              <div className="d-flex justify-content-end">
                <div className="row mx-1">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => props.onLike(props.film)}
                  >
                    <i className="fa-solid fa-thumbs-up"></i>
                    <p className="counter">{props.film.likes}</p>
                  </button>
                </div>
                <div className="row mx-1">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => props.onDisLike(props.film)}
                  >
                    <i className="fa-solid fa-thumbs-down"></i>
                    <p className="counter">{props.film.dislikes}</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmItem;
