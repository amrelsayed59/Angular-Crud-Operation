import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from "@angular/core";
import { AsyncSubject, BehaviorSubject, interval, of, ReplaySubject, Subject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
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
    console.log('myTodo', this.myTodo);

    const subject = new ReplaySubject(0);
    const behaviorSubject = new BehaviorSubject(0);
    const replaySubject = new ReplaySubject(0);
    const asyncSubject = new AsyncSubject();
    subject.subscribe((x) =>{ 
      console.log('in sub 1', x)
    })
    subject.next(1);
    subject.next(2);
    subject.subscribe((x) =>{ 
      console.log('in sub 2', x)
    })
    subject.next(3);

  }

  ngAfterViewInit() {
    console.log('myTodo after view', this.myTodo)
  }

  deleteTask(i) {
    this.tasksSer.deleteTask(i);
  }
  
}
