import { Product } from "./product.interface";

export interface Order {
  items: Partial<Product>[];
  totalPrice: number;
  time: string
}
