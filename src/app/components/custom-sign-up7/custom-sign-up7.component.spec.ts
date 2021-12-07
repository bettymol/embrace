import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomSignUp7Component } from './custom-sign-up7.component';

describe('CustomSignUp7Component', () => {
  let component: CustomSignUp7Component;
  let fixture: ComponentFixture<CustomSignUp7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSignUp7Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSignUp7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
