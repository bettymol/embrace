import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListRefresherPage } from './list-refresher.page';

describe('ListRefresherPage', () => {
  let component: ListRefresherPage;
  let fixture: ComponentFixture<ListRefresherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRefresherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListRefresherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
