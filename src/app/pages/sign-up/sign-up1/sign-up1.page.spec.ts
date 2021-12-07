import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUp1Page } from './sign-up1.page';

describe('SignUp1Page', () => {
  let component: SignUp1Page;
  let fixture: ComponentFixture<SignUp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUp1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
