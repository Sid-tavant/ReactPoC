import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component has", () => {
  //Rendering of components
  test("AddProduct Component that renders the 'Product Name' input", () => {
    render(<App />);
    const prodNameInputElement = screen.getByTestId("product-name");
    expect(prodNameInputElement).toBeInTheDocument();
  });
  test("AddProduct Component that renders the 'Product Quantity' input", () => {
    render(<App />);
    const prodQtyInputElement = screen.getByTestId("product-quantity");
    expect(prodQtyInputElement).toBeInTheDocument();
  });
  test("AddProduct Component that renders the 'Product Price' input", () => {
    render(<App />);
    const prodPriceInputElement = screen.getByTestId("product-price");
    expect(prodPriceInputElement).toBeInTheDocument();
  });
  test("AddProduct Component that renders the 'Add Product' button", () => {
    render(<App />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  //Adding and rendering of new product item in list
  test("Inventory component that renders new product on 'Add Product' button click for valid inputs", () => {
    const { getByTestId, getByText } = render(<App />);

    const prodNameInputElement = getByTestId("product-name");
    fireEvent.change(prodNameInputElement, { target: { value: "Item 1" } });

    const prodQtyInputElement = getByTestId("product-quantity");
    fireEvent.change(prodQtyInputElement, { target: { value: "1" } });

    const prodPriceInputElement = getByTestId("product-price");
    fireEvent.change(prodPriceInputElement, { target: { value: "1.1" } });

    fireEvent.click(getByText(/Add Product/i));

    const listTitleElement = screen.queryByText(/Product List/i);
    expect(listTitleElement).toBeInTheDocument;

    const listItemElements = screen.queryAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
  test("Inventory component that does not render new product on 'Add Product' button click for invalid inputs", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    const { getByTestId, getByText } = render(<App />);

    const prodNameInputElement = getByTestId("product-name");
    fireEvent.change(prodNameInputElement, { target: { value: "Item 1" } });

    const prodQtyInputElement = getByTestId("product-quantity");
    fireEvent.change(prodQtyInputElement, { target: { value: "" } });

    const prodPriceInputElement = getByTestId("product-price");
    fireEvent.change(prodPriceInputElement, { target: { value: "1.1" } });

    fireEvent.click(getByText(/Add Product/i));

    const listTitleElement = screen.queryByText(/Product List/i);
    expect(listTitleElement).not.toBeInTheDocument;

    const listItemElements = screen.queryAllByRole("listitem");
    expect(listItemElements).toHaveLength(0);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
