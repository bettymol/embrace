import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Login7Page } from './login7.page';

describe('Login7Page', () => {
  let component: Login7Page;
  let fixture: ComponentFixture<Login7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Login7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
