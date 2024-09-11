import { NgModule } from "@angular/core";
import { RouterModule, type Routes } from "@angular/router";

import { RandomHomeComponent } from "./home/random-home.component";

const routes: Routes = [
  {
    path: "",
    component: RandomHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomRoutingModule {}
