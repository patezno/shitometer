import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pooper',
  templateUrl: './pooper.component.html',
  styleUrls: ['./pooper.component.scss'],
})
export class PooperComponent implements OnInit {

  @Input() pooper: any;
  @Input() maxNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
