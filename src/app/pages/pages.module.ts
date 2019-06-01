import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesComponent } from "./pages.component";

import { SharedModule } from "../shared/shared.module";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesRoutingModule } from './pages.routes';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [CommonModule, SharedModule, PagesRoutingModule],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  providers: []
})
export class PagesModule {}
