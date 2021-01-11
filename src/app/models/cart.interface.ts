import { Product } from "./product.interface";

export interface Cart {
  userId: string;
  cartItems: CartItem[];
  totalPrice: number;
  totalItems: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  totalPrice: number;
}
