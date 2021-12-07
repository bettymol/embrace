import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-scroll7',
    templateUrl: './scroll7.page.html',
    styleUrls: ['./scroll7.page.scss'],
    animations: [
        trigger('cartState', [
            transition(':enter', [
                style({transform: 'translateY(100%)'}),
                animate(300)
            ]),
            transition(':leave', [
                animate(300, style({transform: 'translateY(100%)'}))
            ])
        ]),
        trigger('flyInCart', [
            transition('void => *', animate('200ms ease-in'))
        ])
    ]
})
export class Scroll7Page implements OnInit {
    total = 0;
    cartState = 'inactive';
    isShow = false;
    list = [
        {name: 'Barbell Deadlift', price: 13, numbers: 3, img: 'assets/images/list/22.jpg'},
        {name: 'Bent Barbell Row', price: 199, numbers: 3, img: 'assets/images/list/23.jpg'},
        {name: 'Wide-Grip Pull-Up', price: 56, numbers: 5, img: 'assets/images/list/24.jpg'},
        {name: 'Standing T-Bar Row', price: 67, numbers: 5, img: 'assets/images/list/25.jpg'},
        {name: 'Wide-Grip Seated Cable Row', price: 16, numbers: 6, img: 'assets/images/list/26.jpg'},
        {name: 'Reverse-Grip Smith Machine Row', price: 19, numbers: 9, img: 'assets/images/list/27.jpg'},
    ];
    cList = [
        {name: 'Barbell Deadlift', price: 13, numbers: 3, img: 'assets/images/list/22.jpg'},
        {name: 'Bent Barbell Row', price: 199, numbers: 3, img: 'assets/images/list/23.jpg'},
        {name: 'Wide-Grip Pull-Up', price: 56, numbers: 5, img: 'assets/images/list/24.jpg'},
        {name: 'Standing T-Bar Row', price: 67, numbers: 5, img: 'assets/images/list/25.jpg'},
    ];

    list1 = [];
    bottom = 0;
    left = 0;
    isAdd = false;

    constructor() {
    }

    ngOnInit() {
        this.total = this.list.map(g => g.numbers).reduce((p, c) => p + c);
    }

    onShow() {
        this.isShow = !this.isShow;
    }

    onClick(event) {
        this.total = this.list.map(g => g.numbers).reduce((p, c) => p + c);
        this.list1.push(1);
        this.left = event.target.getBoundingClientRect().left;
        this.bottom = event.target.getBoundingClientRect().bottom;
    }

    animationStarted(event) {
        const el = event.element;
        el.style.transform = `translate3d(0,${29 + this.bottom - window.innerHeight}px,0)`;
        el.children[0].style.transform = `translate3d(${this.left - 22}px,0,0)`;
        el.children[0].style.opacity = 0;
    }

    animationDone(event: any) {
        const el = event.element;
        el.style.transform = `translate3d(0,0,0)`;
        el.children[0].style.transform = `translate3d(0,0,0)`;
        el.style.transition = 'transform .55s cubic-bezier(0.3, -0.25, 0.7, -0.15)';
        el.children[0].style.transition = 'transform .55s linear';
        el.children[0].style.opacity = 1;
        this.isAdd = true;
        el.children[0].addEventListener('transitionend', () => {
            this.isAdd = false;
            this.list1 = [];
        });
        el.children[0].addEventListener('webkitAnimationEnd', () => {
            this.isAdd = false;
            this.list1 = [];
        });
    }
}
