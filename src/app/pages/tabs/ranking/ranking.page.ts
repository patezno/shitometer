import { Component, OnInit } from '@angular/core';
import { MockupService } from '../../../services/mockup.service';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  items: any = [];
  expandableHeight: number;
  maxNumber: number;

  constructor(
    private mockupService: MockupService,
    private actionSheetController: ActionSheetController
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

  calcExpandableHeight(): number {
    return 70 * this.items.length;
  }

  calcMaxNumber(item): number {
    const num = [];
    item.people.forEach((person) => {
      num.push(person.times);
    });
    return Math.max(...num);
  }

  refresh(event: any) {
    console.log('refresh');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  expandItem(item: any) {
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

  async showActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      buttons: [{
        text: 'Nueva cagada',
        icon: 'add-circle',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Crear grupo',
        icon: 'people-circle',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close-circle',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
