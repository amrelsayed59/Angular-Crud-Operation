import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hadafSolution';

  
  hello() {
    return 'Hello World!';
  }

  constructor(
    // private toastr: ToastrService
  ) {

  }

  // showSuccess() {
  //   this.toastr.success('Hello World', 'Toastr fun!');
  // }

}
