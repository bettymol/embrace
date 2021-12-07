import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-custom-side-right',
    templateUrl: './custom-side-right.component.html',
    styleUrls: ['./custom-side-right.component.scss'],
})
export class CustomSideRightComponent {
    selectType = 'SOCIAL';
    chatList = [
        {name: 'Rowena R Chavez', status: 'online', content: '19 New messages', img: 'assets/images/avatar/1.jpg'},
        {name: 'Dovie Z Carmichael', status: 'online', content: '12 New messages', img: 'assets/images/avatar/2.jpg'},
        {name: 'Ching V Rogers', status: 'online', content: 'Ionic Template', img: 'assets/images/avatar/3.jpg'},
        {name: 'Rochelle R Garren', status: 'online', content: 'Ionic Theme', img: 'assets/images/avatar/4.jpg'},
        {name: 'Renee E Long', status: 'online', content: '13 New messages', img: 'assets/images/avatar/5.jpg'},
        {name: 'Judy T Lay', status: 'online', content: '10 New messages', img: 'assets/images/avatar/6.jpg'}
    ];
    sList = [
        {
            name: 'email',
            icon: 'mail',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            name: 'Twitter',
            icon: 'logo-twitter',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            name: 'Facebook',
            icon: 'logo-facebook',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            name: 'Line',
            icon: 'logo-instagram',
            content: 'I Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            name: 'github',
            icon: 'logo-github',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            name: 'YouTube',
            icon: 'logo-youtube',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        }
    ];

    constructor() {
    }
}
