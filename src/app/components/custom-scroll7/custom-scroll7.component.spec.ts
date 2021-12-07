import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomScroll7Component } from './custom-scroll7.component';

describe('CustomScroll7Component', () => {
  let component: CustomScroll7Component;
  let fixture: ComponentFixture<CustomScroll7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomScroll7Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomScroll7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
