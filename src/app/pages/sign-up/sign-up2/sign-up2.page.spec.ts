import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUp2Page } from './sign-up2.page';

describe('SignUp2Page', () => {
  let component: SignUp2Page;
  let fixture: ComponentFixture<SignUp2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUp2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUp2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
