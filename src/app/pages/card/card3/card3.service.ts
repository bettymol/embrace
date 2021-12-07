import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Card3Service {
    getList(): Array<any> {
        return [
            {
                title: 'Barbell Deadlift',
                date: ' July 21, 2029',
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.',
                img: 'assets/images/list/2.jpg'
            },
            {
                title: 'Bent Barbell Row',
                date: ' July 17, 2029',
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.',
                img: 'assets/images/list/3.jpg'
            },
            {
                title: 'Wide-Grip Pull-Up',
                date: ' July 26, 2029',
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.',
                img: 'assets/images/list/4.jpg'
            },
            {
                title: 'Standing T-Bar Row',
                date: ' July 27, 2029',
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.',
                img: 'assets/images/list/7.jpg'
            }
        ];
    }
}
