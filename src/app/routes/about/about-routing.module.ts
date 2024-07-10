import { NgModule } from "@angular/core";
import { RouterModule, type Routes } from "@angular/router";
import { AboutComponent } from "@app/routes/about/about.component";

const routes: Routes = [{ path: "", component: AboutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
