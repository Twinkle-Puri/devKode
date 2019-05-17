import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  @ViewChild('slider') slider: IonSlides;
  page = '0';

  constructor() { }

  ngOnInit() {
  }


 selectedTab(index) {
     this.slider.slideTo(index);
 }

 async moveButton() {
     const index = await this.slider.getActiveIndex();
     this.page = index.toString();
 }
}
