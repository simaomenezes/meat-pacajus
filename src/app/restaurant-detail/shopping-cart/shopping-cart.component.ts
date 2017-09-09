import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  //pega os items que foram adicionados no carrinho
  items():any[] {
    return this.shoppingCartService.items;
  }

  //pega o total que foi calculado do valor do carrinho
  total(): number {
    return this.shoppingCartService.total();
  }



}
