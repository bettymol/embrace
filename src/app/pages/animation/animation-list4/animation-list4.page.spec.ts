import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimationList4Page } from './animation-list4.page';

describe('AnimationList4Page', () => {
  let component: AnimationList4Page;
  let fixture: ComponentFixture<AnimationList4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationList4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationList4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
