import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { getProducts } from '../Store/Action/product.actions';
import { productData } from '../Data/productDataList';
import { ProductState } from '../Store/Reducer/product.reducer';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,AfterViewInit{
  
  data:any= [];
  result:any = [];
  products$ = this.store.select('product');

  ngAfterViewInit () {
    this.cdr.detectChanges();
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false
    });
  }

  constructor(private http: HttpClient,private cdr:ChangeDetectorRef,private store:Store<ProductState>){
  }

  ngOnInit() {
    // this.store.dispatch(getProducts());
    this.getData();
  }

  getData() {
    this.result = productData;
  }


}


