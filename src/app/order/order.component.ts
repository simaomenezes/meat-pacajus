import { FormGroup, FormBuilder } from '@angular/forms';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { RadioOption } from './../shared/radio/radio-options.model';
import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from 'app/order/order';
import { Router } from '@angular/router';


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
  ]


  //criando componentes para form
  orderForm: FormGroup;

  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group(
      {
        name: this.formBuilder.control(''),
        email: this.formBuilder.control(''),
        emailConfirmation: this.formBuilder.control(''),
        address: this.formBuilder.control(''),
        number: this.formBuilder.control(''),
        optionaLAddress: this.formBuilder.control(''),
        paymentOptions: this.formBuilder.control('')
      }      
    )

  }

  itemsValue(): number{
    return this.orderService.itemsValue();
  }

  carItems(): CartItem[] {
    return this.orderService.carItems();
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem){
    this.orderService.remove(item);
  }

  checkOrder(order: Order){
    order.orderItems = this.carItems().map((item:CartItem)=> new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe(
        (orderId: string) => {

          this.router.navigate(['/order-sumary']);//redirecionamento
          
          console.log(`Compra concluída: ${orderId}`);
          this.orderService.clear();
        }
    );
    console.log(order);
  }

}
