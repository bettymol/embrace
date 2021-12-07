import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Profile6Page } from './profile6.page';

describe('Profile6Page', () => {
  let component: Profile6Page;
  let fixture: ComponentFixture<Profile6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Profile6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
