import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loading8Page } from './loading8.page';

describe('Loading8Page', () => {
  let component: Loading8Page;
  let fixture: ComponentFixture<Loading8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loading8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loading8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
