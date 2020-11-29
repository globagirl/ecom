import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent} from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoriesCreateComponent } from './components/categories-create/categories-create.component';
import { CategoriesUpdateComponent } from './components/categories-update/categories-update.component';
import { CategoriesProductsComponent } from './components/categories-products/categories-products.component';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';

import { AuthGuard } from 'src/app/guards/auth.guard'
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categories-list',
    component: CategoriesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'category-details/:id',
    component: CategoriesProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categories-create',
    component: CategoriesCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categories-update/:id',
    component: CategoriesUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products-list',
    component: ProductsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products-create',
    component: ProductsCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '', // yaani l racine '/' 
    component: HomeComponent
  },


  
  //page 404 w lezem tkoun ekher wa7da fl routes
  {
    path: '**', // ** yaani ay 7aja fl path
    component: Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
