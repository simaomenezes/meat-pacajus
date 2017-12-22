import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {


  constructor(private carService: ShoppingCartService) { }

  carItems(): CartItem[]{
    return this.carService.items;
  }

  increaseQty(item: CartItem){
    this.carService.increaseQty(item);
  }

  decreaseQty(item: CartItem){
    this.carService.decreaseQty(item);
  }

  remove(item: CartItem){
    this.carService.removeItem(item);
  }

}
