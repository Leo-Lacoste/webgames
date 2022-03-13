import { render, screen } from "@testing-library/react";
import GameCard from "./GameCard";

describe(GameCard.name, () => {
  const title = "Mario";
  const urlImage =
    "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg";
  it("renders the image according to url passing in parameter", () => {
    render(<GameCard id="1" name={title} background_image={urlImage} />);
    const image = screen.getByAltText("background");
    expect(image.src).toContain(urlImage);
  });
  it("renders a title `Mario` for the game", () => {
    render(<GameCard id="1" name={title} background_image={urlImage} />);
    expect(screen.getByText("Mario")).toBeInTheDocument();
  });
});
