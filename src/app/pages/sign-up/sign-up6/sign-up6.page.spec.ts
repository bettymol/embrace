import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUp6Page } from './sign-up6.page';

describe('SignUp6Page', () => {
  let component: SignUp6Page;
  let fixture: ComponentFixture<SignUp6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUp6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUp6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
