import { Component, OnInit } from "@angular/core";
import { TasksService } from "src/app/core/services/tasks.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {


  name: string = 'Amr'

  constructor(public tasksSer: TasksService) {}

  ngOnInit(): void {}

  deleteTask(i) {
    this.tasksSer.deleteTask(i);
  }
}
