import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loading6Page } from './loading6.page';

describe('Loading6Page', () => {
  let component: Loading6Page;
  let fixture: ComponentFixture<Loading6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loading6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loading6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
