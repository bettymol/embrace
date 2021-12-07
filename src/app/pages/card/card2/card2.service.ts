import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Card2Service {
    getList(): Array<any> {
        return [
            {
                city: 'Salt Lake',
                country: 'USA',
                temp: '0°c',
                status: ' Moderate',
                aiq: '71',
                img: 'assets/images/list/iq/face2.svg',
                pm: ' PM2.5 | 52 µg/m³',
                color: 'yellow',
            },
            {
                city: 'Salt Lake',
                country: 'CN',
                temp: '0°c',
                status: 'Hazardous',
                aiq: '311',
                img: 'assets/images/list/iq/face3.svg',
                pm: '  PM2.5 | 261.2 µg/m³',
                color: 'taupe',
            },
            {
                city: 'Salt Lake',
                country: 'CN',
                temp: '0°c',
                status: ' Good',
                aiq: '49',
                pm: ' PM2.5 | 34.6 µg/m³',
                img: 'assets/images/list/iq/face1.svg',
                color: 'green',
            },
            {
                city: 'Salt Lake',
                country: 'CN',
                temp: '0°c',
                status: 'Moderate',
                aiq: '49',
                pm: ' PM2.5 | 54.6 µg/m³',
                img: 'assets/images/list/iq/face2.svg',
                color: 'yellow',
            },
            {
                city: 'Salt Lake',
                country: 'CN',
                temp: '0°c',
                status: ' Unhealthy',
                img: 'assets/images/list/iq/face3.svg',
                aiq: '183',
                pm: ' PM2.5 | 365.6 µg/m³',
                color: 'red',
            }
        ];
    }
}
