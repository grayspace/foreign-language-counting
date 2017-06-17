import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailPage } from '../item-detail/item-detail';

import { Language } from '../../models/language';
import { Languages } from '../../providers/providers';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  
  currentLanguages: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public languages: Languages) { }

  /**
   * Perform a service for the proper items.
   */
  getLanguages(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentLanguages = [];
      return;
    }
    this.currentLanguages = this.languages.query({
      name: val,
      native: val,
      sample: val
    });
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
