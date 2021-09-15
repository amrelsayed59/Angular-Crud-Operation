import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from "@angular/core";
import { TasksService } from "src/app/core/services/tasks.service";
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit, AfterViewInit {

  @ViewChild (TodoListComponent, {static: true, read: ElementRef }) myTodo: TodoListComponent;

  name: string = 'Amr'

  constructor(public tasksSer: TasksService) {}

  ngOnInit(): void {
    console.log('myTodo', this.myTodo)
  }

  ngAfterViewInit() {
    console.log('myTodo after view', this.myTodo)
  }

  deleteTask(i) {
    this.tasksSer.deleteTask(i);
  }
}
