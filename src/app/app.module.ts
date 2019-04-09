import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

// Service
import { LogginService } from './service/loggin.service';
import { MovieService } from './service/movie.service';
import { ProductService } from './service/product.service';
import { HttpService } from './service/http.service';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieAddFormComponent } from './movie-add-form/movie-add-form.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routes';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpComponent } from './http/http.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MovieListComponent,
    MovieAddFormComponent,
    ProductComponent,
    HeaderComponent,
    AboutComponent,
    ProductDetailComponent,
    NotFoundComponent,
    HomeComponent,
    ProductListComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LogginService,
    MovieService,
    ProductService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
