import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SteadyHomePage } from './steady-home.page';

describe('SteadyHomePage', () => {
  let component: SteadyHomePage;
  let fixture: ComponentFixture<SteadyHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteadyHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SteadyHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
