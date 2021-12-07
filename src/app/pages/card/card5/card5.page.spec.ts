import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Card5Page } from './card5.page';

describe('Card5Page', () => {
  let component: Card5Page;
  let fixture: ComponentFixture<Card5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Card5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
