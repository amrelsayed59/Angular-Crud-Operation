import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetCalculatorRoutingModule } from './budget-calculator-routing.module';
import { BudgetCalculatorComponent } from './budget-calculator.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BudgetItemCardComponent } from './budget-item-list/budget-item-card/budget-item-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BudgetCalculatorComponent, AddItemFormComponent, BudgetItemListComponent, EditItemModalComponent, MainPageComponent, BudgetItemCardComponent],
  imports: [
    CommonModule,
    BudgetCalculatorRoutingModule,
    FormsModule
  ]
})
export class BudgetCalculatorModule { }
