import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConfirmationService } from "primeng/api";

import { AppComponent } from "./app.component";
import { AboutModule } from "./routes/about/about.module";
import { HomeModule } from "./routes/home/home.module";
import { RandomModule } from "./routes/random/random.module";
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppComponent,
    HomeModule,
    AboutModule,
    RandomModule,
  ],
  providers: [ConfirmationService],
})
export class AppModule {}
