import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "@app/routes/home/home.component";

import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule, HomeComponent],
})
export class HomeModule {}
