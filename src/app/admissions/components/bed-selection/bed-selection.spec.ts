import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedSelection } from './bed-selection';

describe('BedSelection', () => {
  let component: BedSelection;
  let fixture: ComponentFixture<BedSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BedSelection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedSelection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
