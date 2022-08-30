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
import { appRoutes } from './routings/app.routes';

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
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
