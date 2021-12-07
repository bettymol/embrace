import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimationList2Page } from './animation-list2.page';

describe('AnimationList2Page', () => {
  let component: AnimationList2Page;
  let fixture: ComponentFixture<AnimationList2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationList2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationList2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
