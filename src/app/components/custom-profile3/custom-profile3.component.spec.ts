import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomProfile3Component } from './custom-profile3.component';

describe('CustomProfile3Component', () => {
  let component: CustomProfile3Component;
  let fixture: ComponentFixture<CustomProfile3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProfile3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomProfile3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
