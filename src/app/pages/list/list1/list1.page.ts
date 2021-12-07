import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../components/custom-product-list/product.model';
import {List1Service} from './list1.service';
import {animate, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-list1',
    templateUrl: './list1.page.html',
    styleUrls: ['./list1.page.scss'],
    animations: [
        trigger('flyInCart', [
            transition('void => *', animate('200ms ease-in'))
        ])
    ]
})
export class List1Page implements OnInit {
    gList: Array<ProductModel>;
    list: Array<ProductModel>;
    pageList = [1, 2, 3, 4, 5];
    cartNum = 0;
    active = false;
    top = 0;
    right = 0;
    isAdd = false;
    list1 = [];

    constructor(private service: List1Service) {
        this.gList = this.service.getList();
        this.list = this.gList;
    }

    ngOnInit() {
    }

    toggle() {
        this.active = !this.active;
    }

    onOpenCart() {
    }

    onSearch(event) {
        const key = event.target.value.toLowerCase();
        this.list = this.gList.filter(p => p.name.toLowerCase().includes(key));
    }

    onPage(item) {
    }

    onClick(event) {
        this.cartNum = this.cartNum + 1;
        this.list1.push(1);
        this.right = event.target.getBoundingClientRect().right;
        this.top = event.target.getBoundingClientRect().top;
    }

    ionChange(event) {
        if (event.target.value) {
            const lower = event.target.value.lower;
            const upper = event.target.value.upper;
            this.list = this.gList.filter(p => p.price >= lower && p.price <= upper);
        }
    }


    animationStart(event) {
        const element = event.element;
        element.style.transform = `translate3d(0,${this.top - 60}px,0)`;
        element.children[0].style.transform = `translate3d(${-(window.innerWidth - this.right)}px,0,0)`;
        element.children[0].style.opacity = 0;
    }

    animationDone(event: any) {
        const element = event.element;
        element.style.transform = `translate3d(0,0,0)`;
        element.children[0].style.transform = `translate3d(0,0,0)`;
        element.style.transition = 'transform .55s cubic-bezier(0, 0, .58, 1)';
        element.children[0].style.transition = 'transform .55s linear';
        element.children[0].style.opacity = 1;
        this.isAdd = true;
        element.children[0].addEventListener('transitionend', () => {
            this.isAdd = false;
            this.list1 = [];
        });
        element.children[0].addEventListener('webkitAnimationEnd', () => {
            this.isAdd = false;
            this.list1 = [];
        });
    }

}
