import React from "react";
import { render, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import FavButton from "../FavButton";

// Clean up after each test
afterEach(cleanup);

// Test if the button renders on a div without failure
it("button renders without failure", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FavButton index="2" label="Test label" />, div);
});

// Snapshot test 1
it("correlates to snapshot 1", () => {
  const { container } = render(<FavButton index="1" label="Save as favorite" />);
  expect(container).toMatchSnapshot();
});

// Snapshot test 2
it("correlates to snapshot 2", () => {
  const { container } = render(<FavButton index="3" label="Next SVG" />);
  expect(container).toMatchSnapshot();
});
