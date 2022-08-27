import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductList } from './components/products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert_to_spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductList,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
