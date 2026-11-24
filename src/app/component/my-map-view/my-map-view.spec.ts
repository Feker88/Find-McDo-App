import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMapView } from './my-map-view';

describe('MyMapView', () => {
  let component: MyMapView;
  let fixture: ComponentFixture<MyMapView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyMapView],
    }).compileComponents();

    fixture = TestBed.createComponent(MyMapView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
