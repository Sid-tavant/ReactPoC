class Product {
  id: string;
  name: string;
  quantity: number;
  price: number;

  constructor(
    productName: string = "Undefined",
    productQty: number = 0,
    productPrice: number = 0.0
  ) {
    this.id = new Date().toISOString();
    this.name = productName;
    this.quantity = productQty;
    this.price = productPrice;
  }
}

export default Product;
