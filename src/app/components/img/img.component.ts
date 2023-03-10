import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent  {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/descarga.png'

  constructor()
  {
    console.log('Constructor', 'imgValue =>', this.img);
  }

  ngOnChanges() {
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    console.log('ngOnInit', 'imgValue =>', this.img);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded() {
    console.log('Log hijo');
    this.loaded.emit(this.img);
  }
}

