import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Login5Page } from './login5.page';

describe('Login5Page', () => {
  let component: Login5Page;
  let fixture: ComponentFixture<Login5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Login5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
