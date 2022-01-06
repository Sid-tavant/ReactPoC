import { useRef } from "react";
import Product from "../../models/product";

import styles from "./AddProduct.module.css";

const AddProduct: React.FC<{ onAddProd: (newProduct: Product) => void }> = (
  props
) => {
  const prodNameInputRef = useRef<HTMLInputElement>(null);
  const prodQtyInputRef = useRef<HTMLInputElement>(null);
  const prodPriceInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredName = prodNameInputRef.current!.value;

    if (enteredName.trim().length === 0) {
      alert("Please enter a valid name");
      return;
    }

    const enteredQty = parseInt(prodQtyInputRef.current!.value);

    if (enteredQty <= 0 || isNaN(enteredQty)) {
      alert("Quantity cannot be zero or less than zero");
      return;
    }

    const enteredPrice = parseFloat(prodPriceInputRef.current!.value);

    if (enteredPrice <= 0 || isNaN(enteredPrice)) {
      alert("Price cannot be zero or negative");
      return;
    }

    // alert("Product Added Successfully!");
    // console.log("Product Name:", enteredName);
    // console.log("Product Quantity", enteredQty);
    // console.log("Product Price($):", enteredPrice);
    props.onAddProd(new Product(enteredName, enteredQty, enteredPrice));
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div>
        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          id="name"
          data-testid="product-name"
          ref={prodNameInputRef}
        />
      </div>
      <div>
        <label htmlFor="quantity">Product Quantity:</label>
        <input
          type="number"
          id="quantity"
          data-testid="product-quantity"
          ref={prodQtyInputRef}
        />
      </div>
      <div>
        <label htmlFor="price">Product Price($): </label>
        <input
          type="number"
          id="price"
          data-testid="product-price"
          ref={prodPriceInputRef}
          step="0.01"
        />
      </div>
      <div>
        <button>Add Product</button>
      </div>
    </form>
  );
};

export default AddProduct;
