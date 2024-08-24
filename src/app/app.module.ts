import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConfirmationService } from "primeng/api";

import { AppComponent } from "./app.component";
import { HomeModule } from "./routes/home/home.module";
import { RandomModule } from "./routes/random/random.module";
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppComponent,
    HomeModule,
    RandomModule,
  ],
  providers: [ConfirmationService],
})
export class AppModule {}
