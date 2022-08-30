import { Routes } from "@angular/router";
import { WelcomeComponent } from "../components/home/welcome.component";
import { ProductDetailsComponent } from "../components/product-details/product-details/product-details.component";
import { ProductList } from "../components/products/product-list.component";
import { ProductDetailsGuard } from "./product-details.guard";

export const appRoutes: Routes = [
    { path: 'products', component: ProductList },
    // we can define as many parameters as we want: 'products/:id/:param2'
    {
        path: 'products/:id',
        canActivate: [ProductDetailsGuard], // we can have several guards here.
        component: ProductDetailsComponent
    },
    { path: 'welcom', component: WelcomeComponent },
    { path: '', redirectTo: 'welcom', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcom', pathMatch: 'full' }
];
