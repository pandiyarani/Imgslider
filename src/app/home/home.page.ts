import { Component, OnInit,ViewChild } from '@angular/core';

import 'firebase/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { FireStoreService } from './../service/fire-store.service';
import { HeaderComponent } from './../components/header/header.component';

import {IonSlides} from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
	
	@ViewChild(IonSlides) slides: IonSlides;
	
	addData() {
		this.CreateRecord('https://i.ibb.co/kGg8L8x/apple.png', 1, true,'VIVO V17 Glacier Ice (128GB, 8 GB RAM)','72,000');
		this.CreateRecord('https://i.ibb.co/sPf4B5P/realme.png', 2, true,'Oppo Reno 3 Pro (Sky White 128 GB, 8 GB RAM, 8 GB RAM)','80,000');
		this.CreateRecord('https://i.ibb.co/J3hbFJZ/redmi.png', 3, true,'VIVO Y9i, (Ocean Blue, 328 GB, 2 GB RAM)','55,000');
		this.CreateRecord('https://i.ibb.co/xqVYmXn/samsung.png', 4, true,'OnePlus 8, (Interstellar Glow, 256 GB, 12 GB RAM)','92,000');
		this.CreateRecord('https://i.ibb.co/sgWwRns/samsung-a51.png', 5, true,'VIVO V17 Glacier Ice (128GB, 8 GB RAM)','88,000');
		this.CreateRecord('https://i.ibb.co/vs4gg7c/vivo.png',6 , true,'Oppo Reno 3 Pro (Sky White 128 GB, 8 GB RAM, 8 GB RAM)','60,000');

	}

	create_offer(record) {
		return this.firestore.collection('pic').add(record);   
	}

	CreateRecord(Url: string, Id: number, Enabled: boolean, Description: string, Price: string) {
		let record = {};
		record['Url'] = Url;
		record['Id'] = Id;
		record['Enabled'] = Enabled;
		record['Description'] = Description;
		record['Price'] = Price;

		this.ourFire.create_record('pic', record).then((resp) => {

		});
	}

	Url: string;
	Enabled: Boolean;
	Id: Number;
	Description: string;
	Price: string;

	update_offer(recordID, record) {
		this.firestore.doc('pic' + '/' + recordID).update(record);
	}

	delete_offer(record_id) {
		this.firestore.doc('pic' + '/' + record_id).delete();
	}
	read_offer() {
		return this.firestore.collection('pic').snapshotChanges();
	}

	init = false;

	ngOnInit() {
		let record = {};
		this.ourFire.read_record('pic').subscribe((data) => {
			this.pic = data.map((e) => {
				return {
					id: e.payload.doc.id,
					isEdit: false,
					Url: e.payload.doc.data()['Url'],
					Id: e.payload.doc.data()['Id'],
					Enabled: e.payload.doc.data()['Enabled'],
					Description: e.payload.doc.data()['Description'],
					Price: e.payload.doc.data()['Price'],
				};
			});
			
			this.init = true;
		});


	}

	pic: any[];
	constructor(private firestore: AngularFirestore, private ourFire: FireStoreService) {}

	sliderConfig = {

	loop:true,
	initialSlide: 1,
   	slidesPerView: 1,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

     breakpoints: {
    575: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30
    },
   
    1223: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1823: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    2309: {
      slidesPerView: 5,
      spaceBetween: 50
    },
  },
    centeredSlides: true
  };


  slideNext()
  {
this.slides.slideNext();
  }


  slidePrev()
{
 this.slides.slidePrev();
}


onRateChange(event) {
    console.log('Your rate:', event);
  }


}
