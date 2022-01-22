import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableCardsRoutingModule } from './draggable-cards-routing.module';
import { CardViewComponent } from './card-view/card-view.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [CardViewComponent],
  imports: [
    CommonModule,
    DraggableCardsRoutingModule,
    DragDropModule
  ]
})
export class DraggableCardsModule { }
