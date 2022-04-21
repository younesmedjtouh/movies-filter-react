import { render, screen } from "@testing-library/react";
import { Movie } from "../../models/movie";
import FilmItem from "./filmItem";

const movie = {
  id: "1",
  title: "Oceans 8",
  category: "Comedy",
  thumbnail: "1.jpg",
  likes: 4,
  dislikes: 1,
  likeActive: false,
  dislikeActive: false,
} as Movie;

describe("when rendered with a `movie` prop", () => {
  it("should paste it into the title text", () => {
    render(
      <FilmItem
        film={movie}
        onLike={() => {}}
        onDisLike={() => {}}
        onDelete={() => {}}
      />
    );
    expect(screen.getByText(/Oceans 8/)).toBeInTheDocument();
  });
});
