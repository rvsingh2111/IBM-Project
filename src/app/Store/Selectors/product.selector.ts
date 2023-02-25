import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../Reducer/product.reducer';
import { Product } from '../../Models/product';

export const productSelector = createSelector(
    (state: ProductState) => state.product,
    (product: any) => product
  );

  export const product = createSelector(
    productSelector,
    // selectRouteParams,
    (products: ReadonlyArray<Product>) => {
      return products;
    }
  );

