import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimationList5Page } from './animation-list5.page';

describe('AnimationList5Page', () => {
  let component: AnimationList5Page;
  let fixture: ComponentFixture<AnimationList5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationList5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationList5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
