import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
