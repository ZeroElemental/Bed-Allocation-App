import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditRow } from './audit-row';

describe('AuditRow', () => {
  let component: AuditRow;
  let fixture: ComponentFixture<AuditRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
