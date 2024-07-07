import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { ConfirmationService } from "primeng/api";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppComponent],
  providers: [ConfirmationService],
})
export class AppModule {}
