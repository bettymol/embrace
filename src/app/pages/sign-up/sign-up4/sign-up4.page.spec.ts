import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUp4Page } from './sign-up4.page';

describe('SignUp4Page', () => {
  let component: SignUp4Page;
  let fixture: ComponentFixture<SignUp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUp4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
