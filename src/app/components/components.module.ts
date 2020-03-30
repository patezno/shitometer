import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PooperComponent } from './pooper/pooper.component';
import { MapComponent } from './map/map.component';
import { ExpandableComponent } from './expandable/expandable.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PooperComponent,
    MapComponent,
    ExpandableComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    PooperComponent,
    MapComponent,
    ExpandableComponent
  ]
})
export class ComponentsModule { }
