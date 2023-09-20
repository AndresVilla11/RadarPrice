import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { ProductsComponent } from './pages/products/products.component';
import { userGuard } from './auth/guard/user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [userGuard]
  },
  {
    path: 'favorite',
    component: FavoriteComponent,
    canActivate: [userGuard]
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
