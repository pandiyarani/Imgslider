import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HeaderComponent } from './../components/header/header.component';
import { HomePageRoutingModule } from './home-routing.module';

import { IonicRatingModule } from 'ionic4-rating';


@NgModule({
	imports: [CommonModule, IonicRatingModule,
FormsModule, IonicModule, HomePageRoutingModule],
	declarations: [HomePage],
})
export class HomePageModule {}
