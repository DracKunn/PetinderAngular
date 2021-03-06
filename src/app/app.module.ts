import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from "./layout/layout.module";
import { HttpClientModule } from "@angular/common/http";
import { NameFilterPipe } from './pipes/name-filter.pipe';
import { ProfileGalleryComponent } from "./profile-gallery/profile-gallery.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SetupDateComponent } from './date/setup-date/setup-date.component';



@NgModule({
  declarations: [
    AppComponent,
    NameFilterPipe,
    ProfileGalleryComponent,
    SetupDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
