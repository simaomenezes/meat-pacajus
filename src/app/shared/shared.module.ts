import { OrderService } from './../order/order.service';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders } from '@angular/core';
import { InputComponent } from 'app/shared/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from 'app/restaurants/restaurants.service';


@NgModule({

    declarations:[InputComponent, RadioComponent, RatingComponent],
    imports:[FormsModule, ReactiveFormsModule, CommonModule],
    exports: [InputComponent, RadioComponent, RatingComponent,
        FormsModule, ReactiveFormsModule, CommonModule]
})

export class SharedModule{
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers:[ShoppingCartService, OrderService, RestaurantsService]
        }
    }
}