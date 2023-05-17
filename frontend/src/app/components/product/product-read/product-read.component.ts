import { ProductService } from './../product.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss'],
})
export class ProductReadComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];

  products: Product[];
  dataSourceProducts: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductService) {}

  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Itens por página:';

  }

  ngOnInit(): void {
    this.productService.listProducts().subscribe((prod) => {
      this.dataSourceProducts = new MatTableDataSource(prod);
      this.dataSourceProducts.paginator = this.paginator;
    });
  }
}
