import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IProduct } from "../models/products";
import { tap, catchError, map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    // this path defined in the angular.json file in the assets entry.
    private productsUrl = 'api/products/products.json'
    /**
     *
     */
    constructor(private http: HttpClient) {
      
    }
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productsUrl).pipe(
          tap(data => console.log('All: ', JSON.stringify(data))),
          catchError(this.handleError)
        );
    }

    /**
     * In an ideal solution we were saving the product list in some sort of data structure / store and use it to get
     * the product with the requeseted ID. Here we just callling the getProducts again.
     * @param id
     */
    getProductByID(id: number): Observable<IProduct | undefined> {
        return this.getProducts().pipe(
          map((products: IProduct[]) => (products.find(product => product.productId == id)))
        )
    }   
     
    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just loggin it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or a network error occured. Handle it accoringly.
          errorMessage = `An error occuered: ${err.error.message}`;
        }
        else {
          // the backend returned a unsuccessful response code.
          // the response body may contain clues as to what went wrong
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() =>errorMessage);      
    }
}

