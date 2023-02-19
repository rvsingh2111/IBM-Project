import { Action, createReducer, on } from '@ngrx/store';
import { getProducts } from '../Action/product.actions';
import { productData } from 'src/app/Data/productDataList';


export const productFeatureKey = 'product';

export interface ProductState{
  product:ReadonlyArray<any>;
}

export const initialState: ReadonlyArray<any> = [];

export const productReducer = createReducer(
  initialState,
  on(getProducts,(state) => [...productData])
);
