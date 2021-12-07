import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomSignUp6Component } from './custom-sign-up6.component';

describe('CustomSignUp6Component', () => {
  let component: CustomSignUp6Component;
  let fixture: ComponentFixture<CustomSignUp6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSignUp6Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSignUp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
