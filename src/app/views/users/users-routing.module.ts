import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BudgetCalculatorComponent } from './budget-calculator/budget-calculator.component';
import { MainPageComponent } from './budget-calculator/main-page/main-page.component';
import { UsersAddComponent } from "./users-add/users-add.component";
import { UsersEditComponent } from "./users-edit/users-edit.component";
import { UsersListComponent } from "./users-list/users-list.component";

const routes: Routes = [
  {
    path: "",
    component: UsersListComponent,
  },
  {
    path: "add-user",
    component: UsersAddComponent,
  },
  {
    path: "edit-user/:id",
    component: UsersEditComponent,
  },
  {
    path: "budget",
    loadChildren: () => import('./budget-calculator/budget-calculator.module').then(m => m.BudgetCalculatorModule),
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
