import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PnfComponent } from './pnf/pnf.component';
import{HttpClientModule} from'@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AllContactsComponent,
    AddContactsComponent,
    EditContactsComponent,
    ViewContactsComponent,
    HeaderComponent,
    FooterComponent,
    PnfComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
