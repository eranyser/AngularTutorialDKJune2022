import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ProductList } from './components/products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert_to_spaces.pipe';
import { StarComponent } from './shared/start.component';
import { ProductDetailsComponent } from './components/product-details/product-details/product-details.component';
import { WelcomeComponent } from './components/home/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductList,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductList },
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: 'welcom', component: WelcomeComponent },
      { path: '', redirectTo: 'welcom', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcom', pathMatch: 'full' }
  ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
