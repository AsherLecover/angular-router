import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './nav-components/wrapper/wrapper.component';
import { C1Component } from './nav-components/c1/c1.component';
import { C2Component } from './nav-components/c2/c2.component';
import { C3Component } from './nav-components/c3/c3.component';
import {HttpClientModule} from '@angular/common/http';
import { PersonListComponent } from './nav-components/person-list/person-list.component';
import { StarListComponent } from './nav-components/star-list/star-list.component';
import { OtherListComponent } from './nav-components/other-list/other-list.component';
import { MyFormComponent } from './nav-components/my-form/my-form.component';
import { PageNotFoundComponent } from './nav-components/page-not-found/page-not-found.component'


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    C1Component,
    C2Component,
    C3Component,
    PersonListComponent,
    StarListComponent,
    OtherListComponent,
    MyFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
