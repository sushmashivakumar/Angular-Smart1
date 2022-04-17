import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffidivitComponent } from './affidivit/affidivit.component';
import { AggrementsComponent } from './aggrements/aggrements.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path : 'aggrements', component : AggrementsComponent},
  {path :'home',component: HomeComponent},
  {path :'affidivit',component:AffidivitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
