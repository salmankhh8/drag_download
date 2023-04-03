import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  // {path:'', component: AppComponent },
    {path:'first', component: FirstComponent},
    {path:'second', component: SecondComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
