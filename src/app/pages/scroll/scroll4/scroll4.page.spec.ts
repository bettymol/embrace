import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Scroll4Page } from './scroll4.page';

describe('Scroll4Page', () => {
  let component: Scroll4Page;
  let fixture: ComponentFixture<Scroll4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scroll4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Scroll4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
