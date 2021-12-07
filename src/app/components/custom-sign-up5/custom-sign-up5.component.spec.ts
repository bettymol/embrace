import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomSignUp5Component } from './custom-sign-up5.component';

describe('CustomSignUp5Component', () => {
  let component: CustomSignUp5Component;
  let fixture: ComponentFixture<CustomSignUp5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSignUp5Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSignUp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
