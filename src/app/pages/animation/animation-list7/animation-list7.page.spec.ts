import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimationList7Page } from './animation-list7.page';

describe('AnimationList7Page', () => {
  let component: AnimationList7Page;
  let fixture: ComponentFixture<AnimationList7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationList7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationList7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
