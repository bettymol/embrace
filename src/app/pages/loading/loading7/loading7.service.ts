import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Loading7Service {
    getList(): Array<any> {
        return [
            {
                city: 'Salt Lake',
                country: 'USA',
                temp: '12°c',
                temp1: '15°c',
                icon: 'sunny',
                aiq: '52',
                color: 'green',
                color1: 'green1',
                img: 'assets/images/list/iq/face1.svg',
                date: 'Today'
            },
            {
                city: 'Salt Lake',
                country: 'USA',
                temp: '3°c',
                temp1: '7°c',
                icon: 'thunderstorm',
                aiq: '97',
                color: 'yellow',
                color1: 'yellow1',
                img: 'assets/images/list/iq/face2.svg',
                date: 'Tomorrow'
            },
            {
                city: 'Salt Lake',
                country: 'USA',
                temp: '6°c',
                temp1: '8°c',
                icon: 'sunny',
                aiq: '239',
                color: 'red',
                color1: 'red1',
                img: 'assets/images/list/iq/face3.svg',
                date: 'Dec 4'
            },
            {
                city: 'Salt Lake',
                country: 'USA',
                temp: '9°c',
                temp1: '3°c',
                icon: 'cloud',
                aiq: '87',
                color: 'yellow',
                color1: 'yellow1',
                img: 'assets/images/list/iq/face2.svg',
                date: 'Dec 5'
            },
            {
                city: 'Salt Lake',
                country: 'USA',
                temp: '11°c',
                temp1: '15°c',
                icon: 'rainy',
                aiq: '120',
                color: 'red',
                color1: 'red1',
                img: 'assets/images/list/iq/face3.svg',
                date: 'Dec 6'
            },
            {
                city: 'Salt Lake',
                country: 'USA',
                temp: '3°c',
                temp1: '7°c',
                icon: 'sunny',
                aiq: '33',
                color: 'green',
                color1: 'green1',
                img: 'assets/images/list/iq/face1.svg',
                date: 'Dec 7'
            },
            {
                city: 'Salt Lake',
                country: 'USA',
                temp: '3°c',
                temp1: '7°c',
                icon: 'thunderstorm',
                aiq: '97',
                color: 'yellow',
                color1: 'yellow1',
                img: 'assets/images/list/iq/face2.svg',
                date: 'Dec 8'
            },
            {
                city: 'Salt Lake',
                country: 'USA',
                temp: '6°c',
                temp1: '8°c',
                icon: 'sunny',
                aiq: '239',
                color: 'red',
                color1: 'red1',
                img: 'assets/images/list/iq/face3.svg',
                date: 'Dec 9'
            },
            {
                city: 'Salt Lake',
                country: 'USA',
                temp: '9°c',
                temp1: '3°c',
                icon: 'cloud',
                aiq: '87',
                color: 'yellow',
                color1: 'yellow1',
                img: 'assets/images/list/iq/face2.svg',
                date: 'Dec 10'
            },
        ];
    }
}
