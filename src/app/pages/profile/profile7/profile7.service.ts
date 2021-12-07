import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Profile7Service {

    getUser() {
        return {
            avatar: 'assets/images/avatar/3.jpg',
            name: 'Angelina',
            intro: 'I love Ionic Theme',
            list: [
                {img: 'assets/images/list/21.jpg', name: 'Walking lunges'},
                {img: 'assets/images/list/22.jpg', name: 'Pushups'},
                {img: 'assets/images/list/23.jpg', name: 'Situps'},
                {img: 'assets/images/list/24.jpg', name: 'Body weight squats'},
                {img: 'assets/images/list/25.jpg', name: 'Bent Barbell Row'}
            ]
        };
    }

    getList(): Array<any> {
        return [
            {
                avatar: 'assets/images/avatar/5.jpg',
                name: 'Nicole',
                intro: 'Lorem ipsum dolor sit amet',
                content: 'Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
                img: 'assets/images/list/42.jpg',
                date: '5 hours ago',
                happy: 99,
                chat: 19,
                hot: 127

            },
            {
                avatar: 'assets/images/avatar/6.jpg',
                name: 'Rebecca',
                intro: 'pulvinar arcu non vehicula',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.',
                img: 'assets/images/list/43.jpg',
                date: '6 hours ago',
                happy: 139,
                chat: 89,
                hot: 2679

            },
            {
                avatar: 'assets/images/avatar/7.jpg',
                name: 'Angela',
                intro: 'Aliquam tincidunt tincidunt vehicula',
                content: 'Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum.',
                img: 'assets/images/list/8.jpg',
                date: '16 hours ago',
                happy: 96,
                chat: 177,
                hot: 3878

            }];
    }

    getFriendList(): Array<any> {
        return [
            {
                avatar: 'assets/images/avatar/1.jpg',
                name: 'Hannah',
                color: 'favorite',
                text: 'Connect',
                intro: '2 km away',

            },
            {
                avatar: 'assets/images/avatar/2.jpg',
                name: 'Hailey',
                color: 'favorite',
                text: 'Connect',
                intro: '600 m away',

            },
            {
                avatar: 'assets/images/avatar/3.jpg',
                name: 'Savannah',
                color: 'danger',
                text: 'Remove',
                intro: '3 km away'

            },
            {
                avatar: 'assets/images/avatar/4.jpg',
                name: 'Jasmine',
                color: 'danger',
                text: 'Remove',
                intro: '3 km away'

            },
            {
                avatar: 'assets/images/avatar/5.jpg',
                name: 'Brooke',
                color: 'favorite',
                text: 'Connect',
                intro: '3 km away'

            },
            {
                avatar: 'assets/images/avatar/6.jpg',
                name: 'Arianna',
                color: 'danger',
                text: 'Remove',
                intro: '3 km away'

            },
            {
                avatar: 'assets/images/avatar/7.jpg',
                name: 'Camila',
                color: 'favorite',
                text: 'Connect',
                intro: '3 km away'

            }
        ];
    }

    getGroupList(): Array<any> {
        return [
            {
                avatar: 'assets/images/avatar/5.jpg',
                author: 'Emma',
                title: 'Body weight squats',
                date: ' July 21, 2029',
                content: ' Start by standing upright with your feet placed in a position slightly wider than shoulder-width apart.',
                img: 'assets/images/list/8.jpg'
            },
            {
                avatar: 'assets/images/avatar/6.jpg',
                author: 'Ashley',
                title: 'Walking lunges',
                date: ' July 17, 2029',
                content: 'With your right leg, take a large step forward, then drop your body down so that your back leg touches the ground.',
                img: 'assets/images/list/9.jpg'
            },
            {
                avatar: 'assets/images/avatar/7.jpg',
                author: 'Brianna',
                title: 'Pushups',
                date: ' July 26, 2029',
                content: 'Start by lying flat on your stomach. Promptly push down on your palms and raise your body back to a plank position.',
                img: 'assets/images/list/22.jpg'
            },
            {
                avatar: 'assets/images/avatar/8.jpg',
                author: 'Alexis',
                title: 'Situps',
                date: ' July 27, 2029',
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula.',
                img: 'assets/images/list/10.jpg'
            },
            {
                avatar: 'assets/images/avatar/9.jpg',
                author: 'Alexis',
                title: 'Situps',
                date: ' July 27, 2029',
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula.',
                img: 'assets/images/list/11.jpg'
            },
            {
                avatar: 'assets/images/avatar/10.jpg',
                author: 'Alexis',
                title: 'Situps',
                date: ' July 27, 2029',
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula.',
                img: 'assets/images/list/12.jpg'
            },
            {
                avatar: 'assets/images/avatar/11.jpg',
                author: 'Alexis',
                title: 'Situps',
                date: ' July 27, 2029',
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula.',
                img: 'assets/images/list/13.jpg'
            },
            {
                avatar: 'assets/images/avatar/12.jpg',
                author: 'Alexis',
                title: 'Situps',
                date: ' July 27, 2029',
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula.',
                img: 'assets/images/list/14.jpg'
            }, {
                avatar: 'assets/images/avatar/13.jpg',
                author: 'Alexis',
                title: 'Situps',
                date: ' July 27, 2029',
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula.',
                img: 'assets/images/list/15.jpg'
            }
        ];
    }
}
