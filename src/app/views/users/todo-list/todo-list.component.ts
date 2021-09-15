import { Component, OnInit } from '@angular/core';


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

  constructor() { }

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
