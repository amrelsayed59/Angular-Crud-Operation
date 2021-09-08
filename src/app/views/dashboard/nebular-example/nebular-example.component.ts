import { Component, OnInit, ViewChild } from '@angular/core';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-nebular-example',
  templateUrl: './nebular-example.component.html',
  styleUrls: ['./nebular-example.component.scss']
})
export class NebularExampleComponent implements OnInit {
  myArray:any[] =[]
  itemTitleInParent:string;
  dataFromChild:string=''
  @ViewChild('myChild') myChild:MainComponent;

  
  inputOne: string ='';

  
  constructor() { 
    setTimeout(() => {
      this.myChild.setTitle('Amr')
    }, 3000)
  }

  ngOnInit(): void {
    this.myArray= [
      {
        name: 'Dody',
        position: 'Team Lead Front End Developer',
        salary: 35000
      },
      {
        name: 'mody',
        position: 'Senior Front End Developer',
        salary: 28000
      },
      {
        name: 'Mori',
        position: 'Front End Developer',
        salary: 25000
      },
    ]
  }

}
