import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Profile7Page } from './profile7.page';

describe('Profile7Page', () => {
  let component: Profile7Page;
  let fixture: ComponentFixture<Profile7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Profile7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
