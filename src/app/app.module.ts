import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { CardComponent } from './card/card.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { MainPanelComponent } from './main-panel/main-panel.component';

import { DataService } from './data.service';

const routes: Route[] = [
  { path: 'panel', component: MainPanelComponent},
  { path: 'about', component: AboutComponent },
  { path: 'register', component: XyzComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    CardComponent,
    UserComponent,
    AboutComponent,
    MainPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
