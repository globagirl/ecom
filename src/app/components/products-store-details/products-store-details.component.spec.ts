import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsStoreDetailsComponent } from './products-store-details.component';

describe('ProductsStoreDetailsComponent', () => {
  let component: ProductsStoreDetailsComponent;
  let fixture: ComponentFixture<ProductsStoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsStoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsStoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
