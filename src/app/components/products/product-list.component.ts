import { Component, OnInit, SimpleChanges } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "src/app/models/products";
import { ProductService } from "src/app/services/product-list.service";

@Component({
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
    errorMessage: string = "";
    // since we set our project to use typescript strict checking, we must give the sub propety an initial default value
    // we can declare it as:
    // sub: Subscription | undefined
    // or use sub!: Subscription - the ! is called definite assignmnet assertion that tell the typscript compiler that we will handle
    // this assignment sometime later.
    sub!: Subscription ;
    
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
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.performFilter();
            },
            error: err => this.errorMessage = err
        });
        console.log("I am in ngOnInit lifecycle hook");

    }
    
    ngOnChanges(changes: SimpleChanges): void {
        console.log("I am in ngOnChanges lifecycle hook");
    }

    ngOnDestroy(): void {
        console.log("I am in ngOnDestroy lifecycle hook");
        this.sub.unsubscribe();
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