import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Home1Service {

    getBannerList(): Array<string> {
        return [
            'assets/images/aub2.jpg',
            'assets/images/aub3.jpg',
            'assets/images/aub11.jpg'
        ];
    }

    getList(): Array<any> {
        return [
            {icon: 'laptop',url:'donate',title: 'Donate', content: 'You can be a simple solution to the problem of another fellow human being.'},
            {icon: 'code',url:'claim', title: 'Claim', content: 'There is no shame in asking for help from another fellow human being.'},
            {
                icon: 'appstore',
                url:'',
                title: 'Create a New Campaign',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            },
            {icon: 'cog',url:'', title: 'Follow up on a Campaign', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
        ];
    }

    getFList(): Array<any> {
        return [
            {
                title: 'Donate',
                url:'donate',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ipsum dolor sit amet'
            },
            {
                title: 'Claim',
                url:'claim',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ipsum dolor sit amet'
            },
            {

                title: 'Create a New Campain',
                url:'',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ipsum dolor sit amet.'
            },
            {
                title: 'Follow up on a Campaign',
                url:'',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ipsum dolor sit amet'
            },

        ];
    }

    getTList(): Array<any> {
        return [
            {name: 'Angelina', img: 'assets/images/avatar/team.jpg'},
            {name: 'Angelina', img: 'assets/images/avatar/team.jpg'},
            {name: 'Angelina', img: 'assets/images/avatar/team.jpg'},
            {name: 'Angelina', img: 'assets/images/avatar/team.jpg'}
        ];
    }

    getNewList(): Array<any> {
        return [
            {title: 'Ionic Template', img: 'assets/images/list/21.jpg'},
            {title: 'Ionic Template', img: 'assets/images/list/22.jpg'},
            {title: 'Ionic Template', img: 'assets/images/list/23.jpg'},
            {title: 'Ionic Template', img: 'assets/images/list/24.jpg'},
        ];
    }

}
