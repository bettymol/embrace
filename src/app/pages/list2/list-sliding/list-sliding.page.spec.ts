import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListSlidingPage } from './list-sliding.page';

describe('ListSlidingPage', () => {
  let component: ListSlidingPage;
  let fixture: ComponentFixture<ListSlidingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSlidingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListSlidingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
