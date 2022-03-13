import { render, screen } from "@testing-library/react";
import GameLikeCard from "./GameLikeCard";

describe(GameLikeCard.name, () => {
  it("renders the image according to url passing in parameter", () => {
    const urlImage =
      "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg";
    render(<GameLikeCard id="1" background_image={urlImage} />);
    const image = screen.getByAltText("background");
    expect(image.src).toContain(urlImage);
  });
});
