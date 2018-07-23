import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Languages } from '../../providers/providers';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  language: any;
  @ViewChild(Slides) slides: Slides

  constructor(public navCtrl: NavController, navParams: NavParams, languages: Languages, public toastCtrl: ToastController, private storage: Storage) {
    this.language = navParams.get('language') || languages.defaultLanguage;
    this.toast = toastCtrl;
  }

  private speed = 5;
  private isPlaying = false;
  private muteActive = false;
  private toast: any;

//TODO: Get favorites button to update when language is made a fav

  toggleFavorite(languageName) {
    this.storage.ready().then(() => {
      var allLangs = [];
      var lang;
      this.storage.get('allLanguages').then((val) => {
        allLangs = val;
        lang = allLangs.filter(x => x.name === languageName);
        lang[0].isFav = lang[0].isFav ? false : true;
        this.storage.set("allLanguages", allLangs);
      });
    });
  }

  showToast(messageStr: string) {
    let toast = this.toastCtrl.create({
      message: messageStr,
      duration: 2000
    });
    toast.present(toast);
  }

  stopCounting() {
    this.stopPlaying();
  }

  slideChanged() {
    if (this.isPlaying) {
      this.setSpeed();
    }
  }

  slideDragged() {
    this.stopPlaying();
  }

  startPlaying() {
    this.isPlaying = true;
    this.setSpeed();
    this.slides.startAutoplay();
  }

  stopPlaying() {
    this.isPlaying = false;
    if (this.slides)
      this.slides.stopAutoplay();
  }

  muteAudio() {
    if (this.muteActive == true) {
      /*      let toastStr = "Mute off";
            this.showToast(toastStr);*/
      this.muteActive = false;
    } else {
      /*      var toastStr = "Mute on";
            this.showToast(toastStr);*/
      this.muteActive = true;
    }
  }

  setSpeed() {
    this.slides.autoplay = this.convertSpeed(this.speed) * 100;
    this.slides.speed = this.convertSpeed(this.speed) * 100;
  }

  convertSpeed(speed) {
    var spd = 0;
    switch (speed) {
      case 10: spd = 1; break;
      case 9: spd = 2; break;
      case 8: spd = 3; break;
      case 7: spd = 4; break;
      case 6: spd = 5; break;
      case 5: spd = 6; break;
      case 4: spd = 7; break;
      case 3: spd = 8; break;
      case 2: spd = 9; break;
      case 1: spd = 10; break;
    }
    return spd;
  }

}
