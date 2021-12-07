import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomAnimationList4Component } from './custom-animation-list4.component';

describe('CustomAnimationList4Component', () => {
  let component: CustomAnimationList4Component;
  let fixture: ComponentFixture<CustomAnimationList4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAnimationList4Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomAnimationList4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
