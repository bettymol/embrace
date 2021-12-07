import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { List4Page } from './list4.page';

describe('List4Page', () => {
  let component: List4Page;
  let fixture: ComponentFixture<List4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(List4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
