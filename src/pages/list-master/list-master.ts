import { Component } from '@angular/core';
import { NavController, ModalController, MenuController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Languages } from '../../providers/providers';
import { Language } from '../../models/language';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  allLanguages: Language[];
  currentLanguages: Language[];
  favoriteLanguages: Language[];
  numFavs: any;
  favsShowing: any;

  constructor(public navCtrl: NavController, public languages: Languages, public modalCtrl: ModalController, public menu: MenuController, public toastCtrl: ToastController, private storage: Storage) {
    //TODO: Check for currentLanguages in localstorage. If exists, load from LS, else load from JSON.
    storage.ready().then(() => {

      storage.get("allLanguages").then((val) => {
        if (val) {
          this.allLanguages = val;
        } else {
          storage.set("allLanguages", this.languages.query());
          storage.get("allLanguages").then((val) => {
            this.allLanguages = val;
          });
        }
      });
    });

    this.favsShowing = false;
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    this.menu.enable(false); // Disable side menu
    // Get languages from storage
    this.storage.ready().then(() => {
      this.storage.get("allLanguages").then((val) => {
        var allLangs = [];
        var favLangs = [];
        if (val) {
          allLangs = val;
          this.currentLanguages = allLangs;
          favLangs = allLangs.filter(x => x.isFav == true);
          if (favLangs.length > 0) {
            this.favoriteLanguages = allLangs.filter(x => x.isFav == true);
            this.numFavs = favLangs.length;
          }
        } else {
          this.currentLanguages = this.languages.query();
        }
      }); //end get allLanguages
    }); //end storage ready

  }

  showFavs() {
    if (this.favoriteLanguages.length > 0) {
      if (!this.favsShowing) {
        this.currentLanguages = this.favoriteLanguages;
        this.favsShowing = true;
      } else {
        this.currentLanguages = this.languages.query();
        this.favsShowing = false;
      }
    } else {
      this.showToast("No favorites yet! Click the star on any language page to set as a favorite.", 5000);
    }
  }

  ionSelected() {
    // Reset filter when Home tab is selected
    this.currentLanguages = this.languages.query();
    this.favsShowing = false;
  }

  showToast(messageStr: string, duration) {
    let toast = this.toastCtrl.create({
      message: messageStr,
      duration: duration
    });
    toast.present(toast);
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
