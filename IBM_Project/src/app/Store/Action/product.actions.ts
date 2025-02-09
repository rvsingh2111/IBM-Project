import { createAction, props } from '@ngrx/store';

export const getProducts = createAction(
  '[Product] Get Products'
);

export const getProductsSuccess = createAction(
  '[Product] Get Products Success',
  props<{ data: any }>()
);

export const getProductsFailure = createAction(
  '[Product] Get Products Failure',
  props<{ error: any }>()
);
