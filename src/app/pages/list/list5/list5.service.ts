import {Injectable} from '@angular/core';
import {TravelModel} from '../../../components/custom-product-list5/travel.model';

@Injectable({providedIn: 'root'})
export class List5Service {
    getList(): Array<TravelModel> {
        return [
            {
                active: false,
                title: 'Singapore',
                intro: 'A bustling, Singapore is an advanced island country that showcases the best of what Southeast Asia has to offer, from cultural heritage.',
                img: 'assets/images/list/travel/Singapore.jpg'
            },
            {
                active: false,
                title: 'Beijing',
                intro: 'The capital city of China is renowned for its fascinating wealth of history and culture. With a history that dates back at least 3,000 years, Beijing offers plenty of unique sightseeing opportunities and things to do.',
                img: 'assets/images/list/travel/Beijing.jpg'
            },
            {
                active: false,
                title: 'Hong Kong',
                intro: 'Hong Kong brings you the best of contemporary Asia. Walk up the hillsides of SoHo or down the beautiful Victoria Harbour and be amazed at what Hong Kong has to offer.',
                img: 'assets/images/list/travel/HongKong.jpg'
            },
            {
                active: false,
                title: 'Tokyo',
                intro: 'Tokyo is both sophisticated and modern with its staggering skyscrapers. Yet there remains traces of old Edo that is both mystical and beautiful. Just walk around to find streets crammed with wooden houses and traditional rickshaws running over cobblestones. This is what makes Tokyo such a thrilling city.',
                img: 'assets/images/list/travel/Tokyo.jpg'
            },
            {
                active: false,
                title: 'Seoul',
                intro: 'In Seoul, the sun rises with heart. Seoul is also fast re-establishing itself as a new megapolis, redesigning old spaces and re-thinking city living, setting examples for other megacities to learn from.',
                img: 'assets/images/list/travel/Seoul.jpg'
            },

        ];
    }
}
