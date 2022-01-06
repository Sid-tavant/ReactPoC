import { useState } from "react";
import "./App.css";
import AddProduct from "./components/AddProduct/AddProduct";
import Inventory from "./components/Inventory/Inventory";
import Product from "./models/product";

function App() {
  const [inventory, setInventory] = useState<Product[]>([]);

  const onAddProd = (newProd: Product) => {
    setInventory((prevInventory) => {
      return prevInventory.concat(newProd);
    });
  };

  const onDelProd = (id: string) => {
    setInventory((prevInventory) => {
      return prevInventory.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <div className="App">
      <h2>Product Inventory</h2>
      <AddProduct onAddProd={onAddProd} />
      <h3 hidden={inventory.length === 0}>Product List</h3>
      <Inventory items={inventory} onDelProd={onDelProd} />
    </div>
  );
}

export default App;
