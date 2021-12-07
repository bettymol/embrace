import {Injectable} from '@angular/core';
import {CheckModel} from '../../../components/custom-list-checkbox/check.model';

@Injectable({providedIn: 'root'})
export class ListCheckboxService {
    getList(): Array<CheckModel> {
        return [
            {title: 'Barbell Deadlift', checked: false},
            {title: 'Bent Barbell Row', checked: true},
            {title: 'Wide-Grip Pull-Up', checked: false},
            {title: 'Standing T-Bar Row', checked: true},
            {title: 'Wide-Grip Seated Cable Row', checked: false},
            {title: 'Reverse-Grip Smith Machine Row', checked: false},
            {title: 'Triceps pushdown', checked: false},
            {title: 'Relative Strength', checked: true},
            {title: 'BODYWEIGHT TRAINING', checked: false},
        ];
    }
}
