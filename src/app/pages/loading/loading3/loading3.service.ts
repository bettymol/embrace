import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Loading3Service {
    getList(): Array<any> {
        return [
            {
                title: 'Garden Hotel Jingugaien Tokyo Premier',
                img: 'assets/images/list/hotel/1.jpg',
                price: 599,
                stars: [1, 2, 3, 4, 5],
                city: 'Tokyo',
                person: 2,
                bed: 1,
                house: 1
            },
            {
                title: 'The Westin Tokyo',
                img: 'assets/images/list/hotel/2.jpg',
                price: 399,
                stars: [1, 2, 3, 4],
                city: 'Tokyo',
                person: 4,
                bed: 2,
                house: 1
            },
            {

                title: 'JR-EAST HOTEL METS SHIBUYA',
                img: 'assets/images/list/hotel/3.jpg',
                price: 99,
                stars: [1, 2, 3],
                city: 'Tokyo',
                person: 2,
                bed: 1,
                house: 1
            },
            {

                title: 'Staybridge Suites London',
                img: 'assets/images/list/hotel/4.jpg',
                price: 291,
                stars: [1, 2, 3, 4, 5],
                city: 'London',
                person: 2,
                bed: 1,
                house: 1
            },
            {

                title: 'Point A Hotel London Kings Cross',
                img: 'assets/images/list/hotel/5.jpg',
                price: 299,
                stars: [1, 2],
                city: 'London',
                person: 2,
                bed: 1,
                house: 1
            },
            {

                title: 'Capri by Fraser',
                img: 'assets/images/list/hotel/6.jpg',
                price: 199,
                stars: [1, 2, 3, 4],
                city: 'Singapore',
                person: 1,
                bed: 1,
                house: 1
            },
            {
                title: 'Resorts World Sentosa - Equarius Hotel',
                img: 'assets/images/list/hotel/7.jpg',
                price: 99,
                stars: [1, 2, 3, 4, 5],
                city: 'Singapore',
                person: 2,
                bed: 1,
                house: 1
            },
            {
                title: 'Quincy Hotel',
                img: 'assets/images/list/hotel/8.jpg',
                price: 209,
                stars: [1, 2, 4, 5],
                city: 'Singapore',
                person: 2,
                bed: 1,
                house: 1
            },

        ];
    }
}
