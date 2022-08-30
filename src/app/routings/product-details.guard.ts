import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// Guard is a service so we set it into the Angular Injector by the providedIn: root.
// Angular router provides several guards:
// 1. Can Activate - guard navigation to a route
// 2. Can Deactivate - guard naviation from a route
// 3. Resolve -  to pre-fetch data before activating a route
// 4. CanLoad - Prevent asynchronous routing
@Injectable({
  providedIn: 'root'
})
/**
 * Create a guard that enables to route only if the paremeter of the product is a number
 * We protect the ProductDetails route so we add it to this route, in the routings arrray.
 */
export class ProductDetailsGuard implements CanActivate {

  /**
   *
   */
  constructor(private router: Router) {
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    const id = Number(route.paramMap.get('id')); // route is already an activated route snapshot, so we can directly take the id.
    if (isNaN(id) || id < 1) {
        alert('Invalid Product ID'); // IN a real application we display an error page.
        this.router.navigate(['/products']);
        return false;
    }     
    return true;
  }
  
}
