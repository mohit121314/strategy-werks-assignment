import { render, screen } from "@testing-library/react";
import StrategyWerks from "./StrategyWerks";
import { Provider } from "react-redux";
import store from "./store";

test("renders virtual list", () => {
  render(
    <Provider store={store}>
      <StrategyWerks />
    </Provider>
  );
  

const listElement = screen.getByRole('list');
  expect(listElement).toBeInTheDocument();


const firstItem = screen.getByLabelText('Item 1');
  expect(firstItem).toBeInTheDocument();
});
