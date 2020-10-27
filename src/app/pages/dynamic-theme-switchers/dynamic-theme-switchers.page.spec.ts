import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DynamicThemeSwitchersPage } from './dynamic-theme-switchers.page';

describe('DynamicThemeSwitchersPage', () => {
  let component: DynamicThemeSwitchersPage;
  let fixture: ComponentFixture<DynamicThemeSwitchersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicThemeSwitchersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicThemeSwitchersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
