import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Slide4Page } from './slide4.page';

describe('Slide4Page', () => {
  let component: Slide4Page;
  let fixture: ComponentFixture<Slide4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Slide4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
