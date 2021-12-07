import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomProfile6Component } from './custom-profile6.component';

describe('CustomProfile6Component', () => {
  let component: CustomProfile6Component;
  let fixture: ComponentFixture<CustomProfile6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProfile6Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomProfile6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
