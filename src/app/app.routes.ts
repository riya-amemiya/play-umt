import type { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./routes/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "random",
    loadChildren: () =>
      import("./routes/random/random.module").then((m) => m.RandomModule),
  },
];
