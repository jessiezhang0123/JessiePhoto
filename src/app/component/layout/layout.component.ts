import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  effect = 'scrollx';
  photoPath: string;
  listOfPhoto: string [] = new Array(10);

  constructor() { }

  ngOnInit(): void {
    this.photoPath = '../../../assets/Landscape/Scenery ';
    let i: number;

    for (i = 0; i < this.listOfPhoto.length; i++) {
      this.listOfPhoto[i] = this.photoPath + '(' + (i + 1) + ').jpg' ;
      console.log(this.listOfPhoto[i]);
    }
  }

}
