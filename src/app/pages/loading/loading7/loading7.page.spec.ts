import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loading7Page } from './loading7.page';

describe('Loading7Page', () => {
  let component: Loading7Page;
  let fixture: ComponentFixture<Loading7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loading7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loading7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
