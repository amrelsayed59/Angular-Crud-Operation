import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadTodosAction } from 'src/app/store/actions/todos.action';
import { StoreInterface } from 'src/app/store/store';


class TodoItem {
  isDone: boolean;
  name: string
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  constructor(private store: Store<StoreInterface>) {
    this.store.subscribe(data => console.log(data.todos))
   }

   load () {
     this.store.dispatch(new LoadTodosAction())
   }

  items: any[] = [];
  isDone: boolean = false;
  remainingTasks: number;

  add(taskName) {
    this.items.push({name: taskName.value, isDone: false})
    console.warn('list', this.items);
    this.getRemaingCount();
    taskName.value = ''
  }

  toggleTaskisDone(item) {
    item.isDone = !item.isDone;
    console.log('---', item);
    this.getRemaingCount()
  }

  getRemaingCount() {
    this.remainingTasks = this.items.filter((item) => !item.isDone).length;
    console.log('remainingTasks', this.remainingTasks);
  }

  ngOnInit(): void {
    this.getRemaingCount()
  }



}
