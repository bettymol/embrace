import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUp3Page } from './sign-up3.page';

describe('SignUp3Page', () => {
  let component: SignUp3Page;
  let fixture: ComponentFixture<SignUp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUp3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
