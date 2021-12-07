import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loading4Page } from './loading4.page';

describe('Loading4Page', () => {
  let component: Loading4Page;
  let fixture: ComponentFixture<Loading4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loading4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loading4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
