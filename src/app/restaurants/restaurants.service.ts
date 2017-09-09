import { ErrorHandler } from './../app.error-handler';
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Restaurant } from './restaurant/restaurant.model';

import { MEAT_PACAJUS_API } from './../app.api';

@Injectable()

export class RestaurantsService {

    constructor(private http: Http){}


    //pega todos os restaurants
    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_PACAJUS_API}/restaurants`)
            .map(res => res.json())
            .catch(ErrorHandler.handlerError)
    }

    //pega apenas um restaurante referente ao id passado
    restarantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_PACAJUS_API}/restaurants/`+id)
            .map(response => response.json())
            .catch(ErrorHandler.handlerError)
    }
}