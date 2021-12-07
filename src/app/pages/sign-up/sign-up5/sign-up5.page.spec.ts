import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUp5Page } from './sign-up5.page';

describe('SignUp5Page', () => {
  let component: SignUp5Page;
  let fixture: ComponentFixture<SignUp5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUp5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUp5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
