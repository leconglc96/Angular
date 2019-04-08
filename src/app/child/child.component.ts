import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input('name') name;
  @Input('age') age;
  address;
  @Output('address') Address = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    // Address giúp đẩy dữ liệu từ con ra cha.
    // address là dữ liệu cần đẩy ra.
    this.Address.emit(this.address);
  }

}
