import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationTaskComponent } from './information-task.component';

describe('InformationTaskComponent', () => {
  let component: InformationTaskComponent;
  let fixture: ComponentFixture<InformationTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
