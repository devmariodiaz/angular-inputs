import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inputs';
  imgParent = ''; //https://www.w3schools.com/howto/img_avatar.png

  onLoaded(img: string) {
    console.log('Loaded on the Parent', img);
  }
}
