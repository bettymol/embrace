import {Component, Input} from '@angular/core';
import {
    trigger,
    style,
    animate,
    transition,
    state
} from '@angular/animations';
import {ToastProvider} from '../../shared/providers';

@Component({
    selector: 'custom-scroll6',
    templateUrl: './custom-scroll6.component.html',
    styleUrls: ['./custom-scroll6.component.scss'],
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),
                animate('500ms {{delay}}ms')
            ], {params: {delay: 0}}),
            transition('* => void', [
                animate(500, style({transform: 'translateX(100%)'}))
            ])
        ])
    ]
})
export class CustomScroll6Component {
    @Input() list: Array<any>;
    @Input() gList: Array<any>;

    constructor(private toastProvider: ToastProvider) {
    }

    add() {
        const index = Math.floor(Math.random() * this.gList.length);
        this.list.push(Object.assign({...this.gList[index], id: new Date().getTime()}));
    }

    onDel(item) {
        this.list = this.list.filter(s => s.id !== item.id);
    }

}
