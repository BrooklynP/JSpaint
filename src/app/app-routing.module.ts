import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawComponent } from './pages/draw/draw.component';
import { ColourManagerComponent } from './pages/colour-manager/colour-manager.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DrawComponent
  },
  {
    path: 'colours',
    component: ColourManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
