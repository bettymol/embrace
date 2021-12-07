import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimationList6Page } from './animation-list6.page';

describe('AnimationList6Page', () => {
  let component: AnimationList6Page;
  let fixture: ComponentFixture<AnimationList6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationList6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationList6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
