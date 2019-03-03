import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  child1: {footballs: Array<boolean>, name: string, id: number} = {
      footballs: [true, true, true, true, true],
      name: 'Child 1',
      id: 1
    };
    
  child2: {footballs: Array<boolean>, name: string, id: number} = {
      footballs: [true, true, true, true],
      name: 'Child 2',
      id: 2
    };
 
  public CData: number;

  constructor() { }
 
  ngOnInit() {
  }
 
  passBall(id: number) {
    if (id == 1) {
      this.child1.footballs.pop();
      this.child2.footballs.push(true);
    } else if (id == 2) {
      this.child2.footballs.pop();
      this.child1.footballs.push(true);
    }
  }

  changeText(val){
    this.CData=val;
  }
}
