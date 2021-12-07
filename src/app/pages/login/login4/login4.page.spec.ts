import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Login4Page } from './login4.page';

describe('Login4Page', () => {
  let component: Login4Page;
  let fixture: ComponentFixture<Login4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Login4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
