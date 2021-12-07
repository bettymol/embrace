import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-loading4',
  templateUrl: './custom-loading4.component.html',
  styleUrls: ['./custom-loading4.component.scss'],
})
export class CustomLoading4Component {
  @Input() list: Array<any>;
  constructor() { }


}
