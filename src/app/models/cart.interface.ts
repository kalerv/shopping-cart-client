import { Product } from "./product.interface";
import { User } from "./user.interface";

export interface Cart {
  user: User;
  cartItems: CartItem[];
  totalPrice: number;
  totalItems: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
