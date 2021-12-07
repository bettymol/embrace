import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Card1Page } from './card1.page';

describe('Card1Page', () => {
  let component: Card1Page;
  let fixture: ComponentFixture<Card1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Card1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
