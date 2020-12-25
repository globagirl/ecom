import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-products-store-details',
  templateUrl: './products-store-details.component.html',
  styleUrls: ['./products-store-details.component.css']
})
export class ProductsStoreDetailsComponent implements OnInit {

  @Input() productDetails:any
  
  constructor(private sanitizer: DomSanitizer) { }
  
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}

  ngOnInit(): void {
  }

}
