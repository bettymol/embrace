import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loading1Page } from './loading1.page';

describe('Loading1Page', () => {
  let component: Loading1Page;
  let fixture: ComponentFixture<Loading1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loading1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loading1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
