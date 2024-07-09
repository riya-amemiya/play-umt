import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConfirmationService } from "primeng/api";

import { AppComponent } from "./app.component";
import { HomeModule } from "./routes/home/home.module";
@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppComponent, HomeModule],
  providers: [ConfirmationService],
})
export class AppModule {}
