import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loading3Page } from './loading3.page';

describe('Loading3Page', () => {
  let component: Loading3Page;
  let fixture: ComponentFixture<Loading3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loading3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loading3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
