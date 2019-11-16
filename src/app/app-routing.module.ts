import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawComponent } from './pages/draw/draw.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DrawComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
