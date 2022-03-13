import { render, screen } from "@testing-library/react";
import App from "./App";

describe(App.name, () => {
  it("renders the app", () => {
    render(<App />);
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });
});
