import { CoreModule } from './core/core.module';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy} from '@angular/common'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    NotfoundComponent,
    OrderSumaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(ROUTES)
  ],
  // utilizando configuracao para url com # -- hash
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy }, RestaurantsService, ShoppingCartService],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
