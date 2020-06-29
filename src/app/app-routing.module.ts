import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from './nav-components/wrapper/wrapper.component';
import { C1Component } from './nav-components/c1/c1.component';
import { C2Component } from './nav-components/c2/c2.component';
import { C3Component } from './nav-components/c3/c3.component';
import { PersonListComponent } from './nav-components/person-list/person-list.component';
import { StarListComponent } from './nav-components/star-list/star-list.component';
import { OtherListComponent } from './nav-components/other-list/other-list.component';
import { MyFormComponent } from './nav-components/my-form/my-form.component';
import { FormGuardServiceService } from './services/form-guard-service.service';
import { PageNotFoundComponent } from './nav-components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path:'db', component:WrapperComponent ,
      children:[
        { path:'persons',   component:PersonListComponent},
        { path:'stars',     component:StarListComponent}]
  },

  { path:'other', component:OtherListComponent ,
      children:[
        { path:'c1',   component:C1Component},
        { path:'c2',     component:C2Component},
        { path:'c3',     component:C3Component},],
        
  },
  {path: 'form', component: MyFormComponent,
       canDeactivate:[FormGuardServiceService]},
      { path:'',          redirectTo:'db', pathMatch: 'full'},
      { path:'**',        component: PageNotFoundComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
