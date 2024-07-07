import type { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./routes/home/home.module").then((m) => m.HomeModule),
  },
];
