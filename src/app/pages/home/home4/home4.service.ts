import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Home4Service {

    getBannerList(): Array<string> {
        return [
            'assets/images/list/19.jpg',
            'assets/images/list/20.jpg',
            'assets/images/list/21.jpg'
        ];
    }

    getList() {
        return [
            {
                title: 'Bulgarian Split Squat.',
                img: 'assets/images/list/22.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.'
            },
            {
                title: 'Bulgarian Split Squat.',
                img: 'assets/images/list/23.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.'
            },
            {
                title: 'Bulgarian Split Squat.',
                img: 'assets/images/list/24.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.'
            },
            {
                title: 'Romanian Deadlift',
                img: 'assets/images/list/25.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.'
            },
        ];
    }

}
