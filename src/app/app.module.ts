import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ProductList } from './components/products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert_to_spaces.pipe';
import { StarComponent } from './shared/start.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductList,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
