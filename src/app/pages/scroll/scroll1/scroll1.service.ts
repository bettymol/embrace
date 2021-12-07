import {Injectable} from '@angular/core';
import {TravelModel} from '../../../components/custom-product-list5/travel.model';

@Injectable({providedIn: 'root'})
export class Scroll1Service {
    getList(): Array<TravelModel> {
        return [
            {
                active: false,
                title: 'Bent Over Barbell Row',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.',
                img: 'assets/images/list/33.jpg'
            },
            {
                active: false,
                title: 'Side Lateral Raise',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.',
                img: 'assets/images/list/32.jpg'
            },
            {
                active: false,
                title: 'Front Barbell Squat',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.',
                img: 'assets/images/list/31.jpg'
            },
            {
                active: false,
                title: 'Seated Triceps Press',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.',
                img: 'assets/images/list/30.jpg'
            },
            {
                active: false,
                title: 'Dumbbell Bench Press',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.',
                img: 'assets/images/list/29.jpg'
            }
        ];
    }
}
