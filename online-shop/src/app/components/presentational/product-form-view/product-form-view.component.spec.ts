import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormViewComponent } from './product-form-view.component';

describe('ProductFormViewComponent', () => {
  let component: ProductFormViewComponent;
  let fixture: ComponentFixture<ProductFormViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFormViewComponent]
    });
    fixture = TestBed.createComponent(ProductFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
