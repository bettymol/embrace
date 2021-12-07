import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomAnimationList1Component } from './custom-animation-list1.component';

describe('CustomAnimationList1Component', () => {
  let component: CustomAnimationList1Component;
  let fixture: ComponentFixture<CustomAnimationList1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAnimationList1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomAnimationList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
