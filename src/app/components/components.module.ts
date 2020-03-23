import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PooperComponent } from './pooper/pooper.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PooperComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    PooperComponent
  ]
})
export class ComponentsModule { }
