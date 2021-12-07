import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { List6Page } from './list6.page';

describe('List6Page', () => {
  let component: List6Page;
  let fixture: ComponentFixture<List6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(List6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
