import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBedInfo } from './current-bed-info';

describe('CurrentBedInfo', () => {
  let component: CurrentBedInfo;
  let fixture: ComponentFixture<CurrentBedInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentBedInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentBedInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
