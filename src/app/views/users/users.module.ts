import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersListComponent } from "./users-list/users-list.component";
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { HighlightDirective } from './users-list/highlight.directive';
import { RandomColorsDirective } from './users-list/random-color.directive';
import { Sum } from './users-list/sum.pipe';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [UsersListComponent, UsersAddComponent, UsersEditComponent, HighlightDirective, RandomColorsDirective, Sum, TodoListComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
