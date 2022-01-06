import React from "react";
import Product from "../../models/product";

import styles from "./InventoryItem.module.css";

import { MdDeleteOutline } from "react-icons/md";

const InventoryItem: React.FC<{
  item: Product;
  onDelProd: (id: string) => void;
}> = (props) => {
  return (
    <li className={styles.item} key={props.item.id}>
      <div>
        <p>
          Name: <span>{props.item.name}</span>
        </p>
        <p>
          Quantity:<span>{props.item.quantity}</span>
        </p>
        <p>
          Price:$<span>{props.item.price}</span>
        </p>
      </div>
      <div>
        <MdDeleteOutline
          size="1.5rem"
          onClick={props.onDelProd.bind(null, props.item.id)}
        />
      </div>
    </li>
  );
};

export default InventoryItem;
