import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SetupDateComponent} from "./date/setup-date/setup-date.component";

const routes: Routes = [{path: 'setup-date/:name', component: SetupDateComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
