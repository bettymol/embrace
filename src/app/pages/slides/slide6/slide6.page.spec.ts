import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Slide6Page } from './slide6.page';

describe('Slide6Page', () => {
  let component: Slide6Page;
  let fixture: ComponentFixture<Slide6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Slide6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
