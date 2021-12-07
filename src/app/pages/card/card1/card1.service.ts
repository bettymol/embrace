import {Injectable} from '@angular/core';
import {CardModel} from '../../../components/custom-card1/card.model';

@Injectable({providedIn: 'root'})
export class Card1Service {
    getList(): Array<CardModel> {
        return [
            {
                active: false,
                title: 'Richard',
                img: 'assets/images/list/61.jpg',
                star: [1, 1, 1, 1, 1],
                percent: '76%',
                count: 23,
                date: 'Dec 13, 2019',
                rating: '7.96/10',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                active: false,
                title: 'Report',
                img: 'assets/images/list/62.jpg',
                star: [1, 1, 1, 1],
                percent: '83%',
                count: 56,
                date: 'Dec 17, 2019',
                rating: '8.96/10',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                active: false,
                title: 'Irishman',
                img: 'assets/images/list/61.jpg',
                star: [1, 1, 1],
                percent: '79%',
                count: 78,
                date: 'Dec 20, 2019',
                rating: '6.76/10',
                content: 'Cras iaculis pulvinar arcu non vehicula, consectetur adipiscing elit.'
            },
            {
                active: false,
                title: 'Aeronauts',
                img: 'assets/images/list/62.jpg',
                star: [1, 1],
                percent: '83%',
                count: 90,
                date: 'Dec 21, 2019',
                rating: '8.57/10',
                content: 'Thrilling visuals and the substantial chemistry of its well-matched leads make The Aeronauts an adventure well worth taking.'
            },
        ];
    }
}
