import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../Models/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ProductState } from '../Store/Reducer/product.reducer';
import { Store, select } from '@ngrx/store';
import { getProducts } from '../Store/Action/product.actions';
import { product, productSelector } from '../Store/Selectors/product.selector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,AfterViewInit{
  
  @ViewChild('paginator') paginator: MatPaginator;
  pageEvent: PageEvent;
  pageSize:number = 10;
  currentPage = 0;
  dataValue : Product[];
  displayedColumns: string[] = [
    'id',
    'uid',
    'blend_name',
    'origin',
    'variety',
    'notes',
    'intensifier',
  ];
  productData : Product[] = [
    {
      "id": 9120,
      "uid": "75c030ea-64d3-4659-bf4b-0e0410bcf958",
      "blend_name": "Veranda Pie",
      "origin": "Chiriqui, Panama",
      "variety": "Sarchimor",
      "notes": "lingering, juicy, banana, blueberry, white grape",
      "intensifier": "ense"
    },
    {
      "id": 5200,
      "uid": "0c01cbb1-4df4-440d-961a-e7665c9898d3",
      "blend_name": "Postmodern Choice",
      "origin": "Kayanza, Burundi",
      "variety": "Gesha",
      "notes": "mild, slick, cinnamon, snow pea, cacao nibs",
      "intensifier": "unbalanced"
    }
  ]
  dataSource = new MatTableDataSource(this.productData);
  totalSize = this.productData.length;
  dataSubscribe:Subscription;
  dataLoaded:Boolean = false;

  constructor(private changeDetectorRefs: ChangeDetectorRef,private store:Store<ProductState>){
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.totalSize = this.productData.length;
    this.iterator();
    this.changeDetectorRefs.detectChanges();
  }

  ngOnInit(): void {
    this.dataValue = this.productData;
  }

  public handlePage(e: any){
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
    return e;
  }

  private iterator() {
    this.dataValue = this.productData;
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.dataValue.slice(start, end);
    this.dataValue = part;
  }

  loadMoreData(){
    var response:any;
    this.store.dispatch(getProducts());

    this.dataSubscribe = this.store.subscribe(product => {
      response = product;
      this.productData = response.product;
      this.totalSize = this.productData.length;
      this.dataSource = new MatTableDataSource(this.productData);
      this.iterator();
      this.dataLoaded = true;
    })
    this.dataSubscribe.unsubscribe();
  }
}



