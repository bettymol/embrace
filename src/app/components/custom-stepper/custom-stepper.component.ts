import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'custom-stepper',
    templateUrl: './custom-stepper.component.html',
    styleUrls: ['./custom-stepper.component.scss'],
})
export class CustomStepperComponent {
    @Input() numbers = 0;
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onChange = new EventEmitter<number>();

    constructor() {
    }

    sub() {
        if (this.numbers > 0) {
            this.numbers = this.numbers - 1;
            this.onChange.emit(this.numbers);
        }
    }

    add() {
        this.numbers = this.numbers + 1;
        this.onChange.emit(this.numbers);
    }

}
