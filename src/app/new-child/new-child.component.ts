import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css']
})
export class NewChildComponent implements OnInit {
  @Input() PData: number;
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.childEvent.emit(value);
  }

}
