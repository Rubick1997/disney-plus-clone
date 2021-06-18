import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchMediaPolyfill from "mq-polyfill";
import Header from ".";

beforeAll(() => {
  matchMediaPolyfill(window);
  window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height,
    }).dispatchEvent(new this.Event("resize"));
  };
});
test("everything renders correctly in mobile size", () => {
  window.resizeTo(375, 667);
  render(<Header />);
  const navButton = screen.getByRole("button", { name: "open drawer" });
  userEvent.click(navButton);
  const mainButtons = screen.getAllByRole("list-item");
  expect(mainButtons).toHaveLength(6);
  const listItemNames = mainButtons.map((item) => item.textContent);
  expect(listItemNames).toEqual([
    "HOME",
    "SEARCH",
    "WATCHLIST",
    "ORIGINALS",
    "MOVIES",
    "SERIES",
  ]);
});

test("everything renders correctly in desktop size", () => {
  window.resizeTo(801, 667);
  render(<Header />);
  const mainButtons = screen.getAllByRole("button");
  expect(mainButtons).toHaveLength(6);
  const mainButtonsNames = mainButtons.map((item) => item.textContent);
  expect(mainButtonsNames).toEqual([
    "HOME",
    "SEARCH",
    "WATCHLIST",
    "ORIGINALS",
    "MOVIES",
    "SERIES",
  ]);
});
