import {
  NgModule,
  provideExperimentalZonelessChangeDetection,
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConfirmationService } from "primeng/api";

import { AppComponent } from "./app.component";
import { AboutModule } from "./routes/about/about.module";
import { HomeModule } from "./routes/home/home.module";
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppComponent,
    HomeModule,
    AboutModule,
  ],
  providers: [
    ConfirmationService,
    provideExperimentalZonelessChangeDetection(),
  ],
})
export class AppModule {}
