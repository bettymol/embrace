import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Card4Service {
    getList(): Array<any> {
        return [
            {
                avatar: 'assets/images/avatar/5.jpg',
                author: 'Emma',
                title: 'Body weight squats',
                date: ' July 21, 2029',
                content: ' Start by standing upright with your feet placed in a position slightly wider than shoulder-width apart, and your toes pointed straight ahead',
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
                img: 'assets/images/list/10.jpg'
            },
            {
                avatar: 'assets/images/avatar/8.jpg',
                author: 'Alexis',
                title: 'Situps',
                date: ' July 27, 2029',
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula.',
                img: 'assets/images/list/12.jpg'
            }
        ];
    }
}
