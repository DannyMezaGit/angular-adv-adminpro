import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  labels1: string[] = ['walmart', 'Soriana', 'Aurrera'];
  data1: number[] = [20, 40, 33];

  constructor() { }

  ngOnInit(): void {
  }

}
