import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Column } from 'src/app/core/models/column.model';
import { Board } from 'src/app/core/models/board.model';

@Component({
  selector: "app-card-view",
  templateUrl: "./card-view.component.html",
  styleUrls: ["./card-view.component.scss"],
})
export class CardViewComponent implements OnInit {

  board: Board = new Board("test board", [
    new Column('Ideas', [
      "Some random idea",
      "This is another random idea",
      "Build an awesome application"
    ]),
    new Column('Reasearch', [
      "Lorem Ipsum",
      "foo",
      "This was in the 'Research' column"
    ]),
    new Column('Todo', [
      "Get to work",
      "Pick up groceries",
      "Go home",
      "Fail asleep",
    ]),
    new Column('Done', [
      "Get up",
      "Brush teeth",
      "Take a shower",
      "check e-mail",
      "walk dog"
    ])
  ])

  todo = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];
  done = ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"];

  constructor() {}

  ngOnInit(): void {
      
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
