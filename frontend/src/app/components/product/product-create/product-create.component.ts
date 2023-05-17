import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    if (this.product.name != '' && this.product.price != null) {
      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessageSuccess('Produto criado com sucesso!');
        this.router.navigate(['/products']);
      });
    }

    if(this.product.name == ''){
      this.productService.showMessageError('O nome do produto não pode ser vazio.')
    }

    if(this.product.price == null) {
      this.productService.showMessageError('O valor do produto não pode ser vazio.')
    }


  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
