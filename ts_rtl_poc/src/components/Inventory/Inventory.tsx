import Product from "../../models/product";
import InventoryItem from "../InventoryItem/InventoryItem";

import styles from "./Inventory.module.css";

const Inventory: React.FC<{
  items: Product[];
  onDelProd: (id: string) => void;
}> = (props) => {
  return (
    <ul className={styles.inventory}>
      {props.items.map((item) => {
        return (
          <InventoryItem
            key={item.id}
            item={item}
            onDelProd={props.onDelProd}
          />
        );
      })}
    </ul>
  );
};

export default Inventory;
