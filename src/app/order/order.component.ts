import { FormGroup, FormBuilder,Validators } from '@angular/forms';
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


  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/

  //criando componentes para form
  orderForm: FormGroup;

  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group(
      {
        name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
        email: this.formBuilder.control('',[Validators.required, Validators.pattern(this.emailPattern)]),
        emailConfirmation: this.formBuilder.control('',[Validators.required, Validators.pattern(this.emailPattern)]),
        address: this.formBuilder.control('',[Validators.required, Validators.minLength(5)]),
        number: this.formBuilder.control('',[Validators.required, Validators.pattern(this.numberPattern)]),
        optionaLAddress: this.formBuilder.control(''),
        paymentOptions: this.formBuilder.control('',[Validators.required])
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
