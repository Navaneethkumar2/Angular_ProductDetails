import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DeatilsComponent } from './deatils/deatils.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:DashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'products', component:ProductsComponent},
      
          {path:'details/:pid',component:DeatilsComponent},
        
      
      {path:'cart',component:CartComponent},
      {path:'orders',component:OrdersComponent},
      {path:'wishlist',component:WishlistComponent}
    ]
  },

  {path:'admin', component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
