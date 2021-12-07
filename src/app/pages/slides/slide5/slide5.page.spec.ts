import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Slide5Page } from './slide5.page';

describe('Slide5Page', () => {
  let component: Slide5Page;
  let fixture: ComponentFixture<Slide5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Slide5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
