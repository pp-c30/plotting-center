import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GramajeComponent } from './gramaje.component';

describe('GramajeComponent', () => {
  let component: GramajeComponent;
  let fixture: ComponentFixture<GramajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GramajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GramajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
