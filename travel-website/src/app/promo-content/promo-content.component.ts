import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-promo-content',
  templateUrl: './promo-content.component.html',
  styleUrls: ['./promo-content.component.css']
})
export class PromoContentComponent implements OnInit {

  public promoImageList  : any  = [];
  selectedImg : number = 0;
  constructor(private shared : DatashareService) { }

  ngOnInit(): void {
    this.getGalleryImage();
  }

  showSelectedImage(index: number){
    this.selectedImg = index;
  }

  showSlide(index : number){
  this.showSelectedImage(index);
  }

  getGalleryImage(){
    this.shared.fetchFeaturedDestination().subscribe(res => {
      this.promoImageList = Object(res)["result"];
    })
  }

}
