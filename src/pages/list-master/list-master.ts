import { Component } from '@angular/core';
import { NavController, ModalController, MenuController } from 'ionic-angular';

//import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';

import { Languages } from '../../providers/providers';

import { Language } from '../../models/language';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentLanguages: Language[];

  constructor(public navCtrl: NavController, public languages: Languages, public modalCtrl: ModalController, public menu: MenuController) {
    this.currentLanguages = this.languages.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    this.menu.enable(false);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openLanguage(language: Language) {
    this.navCtrl.push(ItemDetailPage, {
      language: language
    });
  }
}
