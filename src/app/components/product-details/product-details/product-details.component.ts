import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product-list.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  pageTitle: string = "Product Details";
  product: IProduct | undefined;
  errorMessage: string = "";
  sub!: Subscription;

  /**
   * 
   * @param route ActivatedRoute is used to get the parameter from the URL
   * @param router Router is used to navigate to a specific route via code.
   */
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    // since we want to read the route parameter only once, we use the route snapshot.
    // it gives route information in a single point in time.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;

    /**
        to read emitted paremeters as they change we us 
        this.route.paramMap.subscribe(
            param => console.log(param.get('id'))
        );
     */	

    this.sub = this.productService.getProductByID(id).subscribe({
      next: product => {
          this.product = product;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  /**
   * We want to route by code, we use the router service.
   */
  onBack(): void {
      this.router.navigate(['/products']);
  }  

}
