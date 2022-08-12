import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  constructor() { }

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault = './assets/images/default-image.jpg';

  ngOnInit(): void {
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log('Loaded');
    this.loaded.emit(this.img);
  }

}
