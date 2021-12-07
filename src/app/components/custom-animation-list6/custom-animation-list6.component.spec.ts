import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomAnimationList6Component } from './custom-animation-list6.component';

describe('CustomAnimationList6Component', () => {
  let component: CustomAnimationList6Component;
  let fixture: ComponentFixture<CustomAnimationList6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAnimationList6Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomAnimationList6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
