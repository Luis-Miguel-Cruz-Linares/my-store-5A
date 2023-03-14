import { Component, EventEmitter, Input, Output, OnInit, OnChanges, AfterViewInit, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy  {
  img: string = '';
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img =>', this.img);
    // code
  }
  @Input() alt: string = '';

  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/descarga.png'
  //counter = 0;
  //counterFn: number | undefined;

  constructor()
  {
    console.log('Constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    // before - during render
    // changes inputs - multiples times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
    // if (changes.) {
      // code
    //}
  }

  ngOnInit(): void {
    // before render
    // async - fetch - once time
    // console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter')
    // }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // handler children -- once time
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete -- once time
    console.log('ngOnDestroy');
   // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Log hijo');
    this.loaded.emit(this.img);
  }
}

