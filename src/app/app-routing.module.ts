import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { PnfComponent } from './pnf/pnf.component';


const routes: Routes = [
{
  path:"", component: AllContactsComponent
},
{
  path:"add-contacts", component: AddContactsComponent
},
{
  path:"edit-contacts/:id", component: EditContactsComponent
},
{
  path:"view-contacts/:id",component:ViewContactsComponent
},
// path of page not found should be at last
{
  path:"**",component:PnfComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
