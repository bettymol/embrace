import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Loading5Service {
    getList(): Array<any> {
        return [
            {
                city: 'Salt Lake',
                country: 'USA',
                temp: '0°c',
                status: 'Good',
                aiq: '52',
                color: 'green',
                color1: 'green1',
                color2: 'green2',
                img: 'assets/images/list/iq/face1.svg',
                week: [
                    {name: 'Mon', aiq: '0-50', temp: '3°c', icon: 'sunny', color: 'success'},
                    {name: 'Tues', aiq: '100-150', temp: '8°c', icon: 'cloud', color: 'warning'},
                    {name: 'Wed', aiq: '200-350', temp: '2°c', icon: 'rainy', color: 'danger'}
                ],
                date: '10:00 AM',
            },
            {
                city: 'Milano',
                country: 'Italy',
                temp: '11°c',
                status: 'Moderate',
                aiq: '89',
                color: 'yellow',
                color1: 'yellow1',
                color2: 'yellow2',
                img: 'assets/images/list/iq/face2.svg',
                week: [
                    {name: 'Mon', aiq: '70-80', temp: '12°c', icon: 'cloud', color: 'warning'},
                    {name: 'Tues', aiq: '80-90', temp: '5°c', icon: 'rainy', color: 'warning'},
                    {name: 'Wed', aiq: '90-120', temp: '8°c', icon: 'rainy', color: 'warning'}
                ],
                date: '11:00 AM',
            },
            {
                city: 'Dhaka',
                country: 'Bangladesh',
                temp: '3°c',
                status: 'Unhealthy',
                aiq: '159',
                color: 'red',
                color1: 'red1',
                color2: 'red2',
                img: 'assets/images/list/iq/face3.svg',
                week: [
                    {name: 'Mon', aiq: '100-150', temp: '3°c', icon: 'thunderstorm', color: 'warning'},
                    {name: 'Tues', aiq: '200-250', temp: '6°c', icon: 'cloud', color: 'danger'},
                    {name: 'Wed', aiq: '200-300', temp: '9°c', icon: 'rainy', color: 'danger'}
                ],
                date: '11:00 AM',
            },
        ];
    }
}
