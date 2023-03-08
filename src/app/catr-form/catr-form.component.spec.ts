import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatrFormComponent } from './catr-form.component';

describe('CatrFormComponent', () => {
  let component: CatrFormComponent;
  let fixture: ComponentFixture<CatrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatrFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
