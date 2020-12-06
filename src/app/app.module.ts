import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import{ HttpClientModule }from "@angular/common/http"

import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ChartsModule } from 'ng2-charts';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoriesUpdateComponent } from './components/categories-update/categories-update.component';
import { CategoriesCreateComponent } from './components/categories-create/categories-create.component';
import { CategoriesProductsComponent } from './components/categories-products/categories-products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    Page404Component,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    CategoriesListComponent,
    CategoriesUpdateComponent,
    CategoriesCreateComponent,
    CategoriesProductsComponent,
    ProductsListComponent,
    ProductsCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
