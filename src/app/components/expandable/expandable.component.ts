import { Component, OnInit, ViewChild, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements OnInit, AfterViewInit {

  @ViewChild('expandWrapper', { static: false }) expandWrapper: ElementRef;
  @Input() expanded: boolean;
  @Input() expandHeight: string;

  constructor(public renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.expandWrapper.nativeElement, 'max-height', this.expandHeight + 'px');
  }

  ngOnInit() {}

}
