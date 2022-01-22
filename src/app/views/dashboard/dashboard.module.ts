import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NebularExampleComponent } from './nebular-example/nebular-example.component';
import { MainComponent } from './nebular-example/main/main.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [NebularExampleComponent, MainComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbCardModule,
  ]
})
export class DashboardModule { }
