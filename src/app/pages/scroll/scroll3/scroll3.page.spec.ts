import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Scroll3Page } from './scroll3.page';

describe('Scroll3Page', () => {
  let component: Scroll3Page;
  let fixture: ComponentFixture<Scroll3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scroll3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Scroll3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
