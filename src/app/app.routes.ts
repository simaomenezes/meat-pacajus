import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router'
import { OrderSumaryComponent } from 'app/order-sumary/order-sumary.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
        children:[
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'review', component: ReviewsComponent}
        ]
    },
    {path: 'order', component: OrderComponent},
    {path: 'order-sumary', component: OrderSumaryComponent },
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: '**', component: NotfoundComponent}
]