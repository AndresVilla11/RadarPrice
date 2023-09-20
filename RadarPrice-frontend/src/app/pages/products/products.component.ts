import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/model/Products';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  selectedProduct: boolean = false;
  cardProduct!: Products;
  products: Products[] = [{
    productName: 'HUEVO',
    productPrice: '$ 15.000'
  }, {
    productName: 'LECHE',
    productPrice: '$ 45.000'
  }
  ];

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void { }

  selectProduct(product: Products) {
    this.selectedProduct = true;
    this.cardProduct = product;
    console.log(product);
  }

  closeCard() {
    this.selectedProduct = false;
  }

  addProduct(addProduct: Products) {
    this.productService.addProductToUser(addProduct).subscribe({
      next: (productData) => {
      },
      error: (errorData) => {
        console.error(errorData);
      },
      complete: () => {
        console.info("complete");
        this.router.navigateByUrl('/user');
      }
    });
}
}
