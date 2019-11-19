import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawComponent } from './pages/draw/draw.component';
import { FormsModule } from '@angular/forms';
import { ColourManagerComponent } from './pages/colour-manager/colour-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawComponent,
    ColourManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
