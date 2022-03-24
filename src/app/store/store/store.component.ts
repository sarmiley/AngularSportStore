import { Product } from './../../model/product.model';
import { ProductRepository } from './../../model/product.repository';
import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  public selectCateory: string | null = null;

  constructor(private repo: ProductRepository) {}

  get products(): Product[] {
    return this.repo.getProducts(this.selectCateory);
  }

  get categories(): string[] {
    return this.repo.getCategories();
  }

  changeCategory(newCategory: string | null = null) {
    this.selectCateory = newCategory;
  }
}
