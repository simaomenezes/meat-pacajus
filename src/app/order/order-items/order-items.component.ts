import { CartItem } from './../../restaurant-detail/shopping-cart/cart-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() increaseQty = new EventEmitter<CartItem>();
  @Output() decreaseQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitterDecreaseQty(item: CartItem) {
    this.decreaseQty.emit(item);
  }

  emitterIncreaseQty(item: CartItem) {
    this.increaseQty.emit(item);
  }

  emitterRemove(item: CartItem) {
    this.remove.emit(item);
  }

}
