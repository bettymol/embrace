import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Card7Service {
    getList(): Array<any> {
        return [
            {
                avatar: 'assets/images/avatar/5.jpg',
                author: 'Lauren',
                cate: 'TIME Magazine',
                date: ' Nov 22, 2019',
                content: 'Ford v Ferrari is a little too long; some scenes leave unnecessary skidmark trails. But the movie still has amiable style and energy to spare. It\'s fast but never furious.',
                img: 'assets/images/list/20.jpg'
            },
            {
                avatar: 'assets/images/avatar/6.jpg',
                author: 'Gabriella',
                cate: 'ReelViews',
                date: ' Nov 12, 2019',
                content: 'Mangold takes Ford v. Ferrari out of the simple realm of the genre without entirely losing the vibe.',
                img: 'assets/images/list/21.jpg'
            },
            {
                avatar: 'assets/images/avatar/7.jpg',
                author: 'Katherine',
                cate: 'Times (UK)',
                date: ' Nov 23, 2019',
                content: 'A blend of thrilling action and nuanced character study, with a great big dollop of emotion.',
                img: 'assets/images/list/22.jpg'
            },
            {
                avatar: 'assets/images/avatar/8.jpg',
                author: 'Evelyn',
                cate: 'The Atlantic',
                date: ' Nov 21, 2019',
                content: 'Quick wit, dry dialogue and grace notes punctuate bursts of velocity. Big themes sound.',
                img: 'assets/images/list/23.jpg'
            }
        ];
    }
}
