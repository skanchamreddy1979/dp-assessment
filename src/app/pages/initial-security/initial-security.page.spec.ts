import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InitialSecurityPage } from './initial-security.page';

describe('InitialSecurityPage', () => {
  let component: InitialSecurityPage;
  let fixture: ComponentFixture<InitialSecurityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialSecurityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InitialSecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
