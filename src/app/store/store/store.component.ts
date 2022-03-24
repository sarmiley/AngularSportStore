import { Product } from './../../model/product.model';
import { ProductRepository } from './../../model/product.repository';
import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  selectCateory: string | null = null;
  productsPerPage = 4;
  selectPage = 1;

  constructor(private repo: ProductRepository) {}

  get products(): Product[] {
    let pageIndex = (this.selectPage - 1) * this.productsPerPage;
    return this.repo
      .getProducts(this.selectCateory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repo.getCategories();
  }

  // get pageNumbers(): number[] {
  //   return Array(
  //     Math.ceil(
  //       this.repo.getProducts(this.selectCateory).length / this.productsPerPage
  //     )
  //   )
  //     .fill(0)
  //     .map((x, i) => i + 1);
  // }

  get pageCount(): number {
    return Math.ceil(
      this.repo.getProducts(this.selectCateory).length / this.productsPerPage
    );
  }

  changeCategory(newCategory: string | null = null): void {
    this.selectCateory = newCategory;
  }

  changePage(newPage: number): void {
    this.selectPage = newPage;
  }

  changePageSize(newSize: any): void {
    console.log(newSize);

    this.productsPerPage = newSize ?? 3;
    this.changePage(1);
  }
}
