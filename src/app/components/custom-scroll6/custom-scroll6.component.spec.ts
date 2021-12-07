import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomScroll6Component } from './custom-scroll6.component';

describe('CustomScroll6Component', () => {
  let component: CustomScroll6Component;
  let fixture: ComponentFixture<CustomScroll6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomScroll6Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomScroll6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
