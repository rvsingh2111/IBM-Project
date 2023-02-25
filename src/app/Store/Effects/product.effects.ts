import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getProducts, getProductsSuccess } from '../Action/product.actions';
import { exhaustMap, map, catchError, EmptyError } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';
import { Product } from '../../Models/product';

@Injectable()
export class ProductEffects {


  constructor(private actions$: Actions,private dataService:DataService) {}

  loadProductList$ = createEffect(( )=> this.actions$.pipe(
    ofType(getProducts),
    exhaustMap(() =>
      this.dataService.getProducts().pipe(
        map((products) => getProductsSuccess(products)),
        catchError(() => {return []})
      )
    )
  ));
}
