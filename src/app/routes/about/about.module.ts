import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, AboutRoutingModule, AboutComponent],
})
export class AboutModule {}
