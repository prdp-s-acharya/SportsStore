import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomercreateComponent } from './customer/customercreate/customercreate.component';
import { CustomerdeleteComponent } from './customer/customerdelete/customerdelete.component';
import { CustomerIndexComponent } from './customer/customer-index/customer-index.component';
import { CustomerupdateComponent } from './customer/customerupdate/customerupdate.component';
import { CustomerviewComponent } from './customer/customerview/customerview.component';

const routes: Routes = [
  //{path:'',redirectTo:'customer/index',component:CustomerIndexComponent},
  {path:'customer/index',component:CustomerIndexComponent},
  {path:'customer/view',component:CustomerviewComponent},
  {path:'customer/create',component:CustomercreateComponent},
  {path:'customer/update',component:CustomerupdateComponent},
  {path:'customer/delete',component:CustomerdeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
