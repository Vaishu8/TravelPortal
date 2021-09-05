import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  public destinationList  : any  = [];
  constructor(private shared : DatashareService) { }

  ngOnInit(): void {
    this.getGalleryImage();
  }

  getGalleryImage(){
    this.shared.fetchFeaturedDestination().subscribe(res => {
      this.destinationList = Object(res)["result"];
    })
  }

}
