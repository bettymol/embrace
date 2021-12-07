import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomAnimationList3Component } from './custom-animation-list3.component';

describe('CustomAnimationList3Component', () => {
  let component: CustomAnimationList3Component;
  let fixture: ComponentFixture<CustomAnimationList3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAnimationList3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomAnimationList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
