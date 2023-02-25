import { createAction, props } from '@ngrx/store';
import { Product } from '../../Models/product';

export const getProducts = createAction(
  '[Product] Get Products'
);

export const getProductsSuccess = createAction(
  '[Product] Get Products Success',
  (products: ReadonlyArray<Product>) => ({ products })
  // props<{ data: any }>()
);

export const getProductsFailure = createAction(
  '[Product] Get Products Failure',
  props<{ error: any }>()
);
