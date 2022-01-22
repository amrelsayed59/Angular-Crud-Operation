import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutsModule } from './components/layouts/layouts.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [NotfoundComponent, DeleteModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutsModule,
    RouterModule,
    DragDropModule
  ],
  exports:[
    NotfoundComponent,
    DeleteModalComponent
  ]
})
export class SharedModule { }
