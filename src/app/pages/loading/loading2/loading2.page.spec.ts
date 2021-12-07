import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loading2Page } from './loading2.page';

describe('Loading2Page', () => {
  let component: Loading2Page;
  let fixture: ComponentFixture<Loading2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loading2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loading2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
