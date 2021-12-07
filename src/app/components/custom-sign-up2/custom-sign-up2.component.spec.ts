import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomSignUp2Component } from './custom-sign-up2.component';

describe('CustomSignUp2Component', () => {
  let component: CustomSignUp2Component;
  let fixture: ComponentFixture<CustomSignUp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSignUp2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSignUp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
