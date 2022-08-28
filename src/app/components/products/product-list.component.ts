import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/models/products";
import { ProductService } from "src/app/services/product-list.service";

@Component({
    selector: "product-list",
    templateUrl: "./product-list.component.html",
    styleUrls: ['./product-list.component.css']
})

/**
 * Lifecycle Hooks:
 * the most common are:
 * OnInit: Ususlly perform component initializaiton, retrive data
 * OnChanges: Perform action after change to input porperties
 * OnDestroy: Perform cleanup.
 */
export class ProductList implements OnInit{
    
    productTitle: string = "Products List";
    products: IProduct[] = []
    filteredProducts: IProduct[] = [];
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string = "";

    /**
     *
     */
    constructor(private productService: ProductService) {
        
    }

    get listFilter() : string {
      return this._listFilter;
    }
   
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.performFilter();
    }
   
    ngOnInit() :void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.performFilter();
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
   
    performFilter() : IProduct[] {
      return this.products.filter( (product: IProduct) => product.productName.toLowerCase().includes(this._listFilter.toLowerCase()) )
    }
   
    onRatingClicked(message: string) {
      this.productTitle = `Products List: ${message}`
    }
}