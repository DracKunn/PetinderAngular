import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LayoutComponent } from "./layout/layout.component";
import { AppRoutingModule } from "../app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
  ],
  exports: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LayoutModule {
}
