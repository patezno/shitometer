import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankingPageRoutingModule } from './ranking-routing.module';

import { RankingPage } from './ranking.page';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RankingPage]
})
export class RankingPageModule {}
