import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'new', component: NewComponent},
  {path:'',redirectTo:'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
