import { Component, OnInit } from '@angular/core';
import { MockupService } from '../../../services/mockup.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  items: any = [];
  expandableHeight: number;

  constructor(
    private mockupService: MockupService
  ) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.mockupService.getGroups().subscribe((data: any[]) => {
      data.forEach((item) => item.expanded = false);
      this.items = data;
      this.items[0].expanded = true;
      this.getCagaderos();
    });
  }

  getCagaderos() {
    this.mockupService.getCadadas().subscribe((data: any[]) => {
      this.items.forEach((item) => {
        data.forEach((person) => {
          person.groupId.forEach((group) => {
            if (group === item.id) {
              (item.people) ? item.people.push(person) : item.people = [person];
            }
          });
        });
      });
      this.calcExpandableHeight();
    });
  }

  calcExpandableHeight() {
    return 70 * this.items.length;
  }

  refresh(event: any) {
    console.log('refresh');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  expandItem(item: any): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map((listItem: any) => {
        if (item === listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

}
