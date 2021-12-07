import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUp7Page } from './sign-up7.page';

describe('SignUp7Page', () => {
  let component: SignUp7Page;
  let fixture: ComponentFixture<SignUp7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUp7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUp7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
