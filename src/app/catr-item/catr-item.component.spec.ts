import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatrItemComponent } from './catr-item.component';

describe('CatrItemComponent', () => {
  let component: CatrItemComponent;
  let fixture: ComponentFixture<CatrItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatrItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatrItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
