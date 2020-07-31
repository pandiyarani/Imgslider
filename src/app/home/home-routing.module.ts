import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HeaderComponent } from '../components/header/header.component';

const routes: Routes = [
	{
		path: '',
		component: HomePage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule, HeaderComponent],
	declarations: [HeaderComponent],
})
export class HomePageRoutingModule {}
