export class Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;

  constructor(
    id: number,
    name: string,
    category: string,
    description: string,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.description = description;
    this.price = price;
  }
}
