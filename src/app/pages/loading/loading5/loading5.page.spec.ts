import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loading5Page } from './loading5.page';

describe('Loading5Page', () => {
  let component: Loading5Page;
  let fixture: ComponentFixture<Loading5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loading5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loading5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
