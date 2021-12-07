import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Slide7Page } from './slide7.page';

describe('Slide7Page', () => {
  let component: Slide7Page;
  let fixture: ComponentFixture<Slide7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Slide7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
