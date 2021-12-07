import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-loading2',
  templateUrl: './custom-loading2.component.html',
  styleUrls: ['./custom-loading2.component.scss'],
})
export class CustomLoading2Component  {
  @Input() list: Array<any>;
  constructor() { }
}
