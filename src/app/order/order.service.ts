import { MEAT_PACAJUS_API } from './../app.api';
import { Http, Headers, ResponseOptions, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Order } from 'app/order/order';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';


@Injectable()
export class OrderService {

  constructor(private carService: ShoppingCartService, private http: Http) { }

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

  itemsValue(): number {
    return this.carService.total();
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(
        `${MEAT_PACAJUS_API}/orders`, 
        JSON.stringify(order), 
        new RequestOptions({headers: headers})).map(res => res.json()
      );
  }


  clear(){
    this.carService.clear();
  }

}
