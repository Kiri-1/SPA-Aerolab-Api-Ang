import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { AerolabApiService } from 'src/app/services/aerolab-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

//uso servicio para obtener y mostrar la lista de productos
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private apiService: AerolabApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
