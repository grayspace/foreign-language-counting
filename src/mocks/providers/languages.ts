import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Language } from '../../models/language';

@Injectable()
export class Languages {
  languages: Language[] = [];

  defaultLanguage: any = {
    "name": "Spanish",
    "nativeName": "Español",
    "icon": "assets/img/spanish.png",
    "iconBg": "#173B7C",
    "isFav": false,
    "sample": "Uno, dos, tres...",
    "numbers": [
      { "num": "1", "eng": "One", "native": "Uno", "char": "1" },
      { "num": "2", "eng": "Two", "native": "Dos", "char": "2" },
      { "num": "3", "eng": "Three", "native": "Tres", "char": "3" },
      { "num": "4", "eng": "Four", "native": "Cuatro", "char": "4" },
      { "num": "5", "eng": "Five", "native": "Cinco", "char": "5" },
      { "num": "6", "eng": "Six", "native": "Seis", "char": "6" },
      { "num": "7", "eng": "Seven", "native": "Siete", "char": "7" },
      { "num": "8", "eng": "Eight", "native": "Ocho", "char": "8" },
      { "num": "9", "eng": "Nine", "native": "Nueve", "char": "9" },
      { "num": "10", "eng": "Ten", "native": "Diez", "char": "10" }
    ]
  };


  constructor(public http: Http) {
    let languages = [
      {
        "name": "Spanish",
        "nativeName": "Español",
        "icon": "assets/img/spanish.png",
        "iconBg": "#173B7C",
        "isFav": false,
        "sample": "Uno, dos, tres, cuatro, cinco...",
        "numbers": [
          { "num": "1", "eng": "One", "native": "Uno", "char": "1" },
          { "num": "2", "eng": "Two", "native": "Dos", "char": "2" },
          { "num": "3", "eng": "Three", "native": "Tres", "char": "3" },
          { "num": "4", "eng": "Four", "native": "Cuatro", "char": "4" },
          { "num": "5", "eng": "Five", "native": "Cinco", "char": "5" },
          { "num": "6", "eng": "Six", "native": "Seis", "char": "6" },
          { "num": "7", "eng": "Seven", "native": "Siete", "char": "7" },
          { "num": "8", "eng": "Eight", "native": "Ocho", "char": "8" },
          { "num": "9", "eng": "Nine", "native": "Nueve", "char": "9" },
          { "num": "10", "eng": "Ten", "native": "Diez", "char": "10" }
        ]
      },
      {
        "name": "Japanese",
        "nativeName": "日本語",
        "icon": "assets/img/japanese.png",
        "iconBg": "#197C17",
        "isFav": false,
        "sample": "Ichi, ni, san, yon, go...",
        "numbers": [
          { "num": "1", "eng": "One", "native": "Ichi", "char": "一" },
          { "num": "2", "eng": "Two", "native": "Ni", "char": "二" },
          { "num": "3", "eng": "Three", "native": "San", "char": "三" },
          { "num": "4", "eng": "Four", "native": "Shi", "char": "四" },
          { "num": "5", "eng": "Five", "native": "Go", "char": "五" },
          { "num": "6", "eng": "Six", "native": "Roku", "char": "六" },
          { "num": "7", "eng": "Seven", "native": "Shichi", "char": "七" },
          { "num": "8", "eng": "Eight", "native": "Hachi", "char": "八" },
          { "num": "9", "eng": "Nine", "native": "kyū", "char": "九" },
          { "num": "10", "eng": "Ten", "native": "jū", "char": "十" }
        ]
      },
      {
        "name": "German",
        "nativeName": "Deutsch",
        "icon": "assets/img/german.png",
        "iconBg": "#E9E648",
        "isFav": false,
        "sample": "Eins, zwei, drei, vier, fünf...",
        "numbers": [
          { "num": "1", "eng": "One", "native": "Eins", "char": "1" },
          { "num": "2", "eng": "Two", "native": "Zwei", "char": "2" },
          { "num": "3", "eng": "Three", "native": "Drei", "char": "3" },
          { "num": "4", "eng": "Four", "native": "Vier", "char": "4" },
          { "num": "5", "eng": "Five", "native": "Fünf", "char": "5" },
          { "num": "6", "eng": "Six", "native": "Sechs", "char": "6" },
          { "num": "7", "eng": "Seven", "native": "Sieben", "char": "7" },
          { "num": "8", "eng": "Eight", "native": "Acht", "char": "8" },
          { "num": "9", "eng": "Nine", "native": "Neun", "char": "9" },
          { "num": "10", "eng": "Ten", "native": "Zehn", "char": "10" }
        ]
      },
      {
        "name": "French",
        "nativeName": "Français",
        "icon": "assets/img/french.png",
        "iconBg": "#E9743E",
        "isFav": false,
        "sample": "Un, deux, trois, quatre, cinq...",
        "numbers": [
          { "num": "1", "eng": "One", "native": "Un", "char": "1" },
          { "num": "2", "eng": "Two", "native": "Deux", "char": "2" },
          { "num": "3", "eng": "Three", "native": "Trois", "char": "3" },
          { "num": "4", "eng": "Four", "native": "Quatre", "char": "4" },
          { "num": "5", "eng": "Five", "native": "Cinq", "char": "5" },
          { "num": "6", "eng": "Six", "native": "Six", "char": "6" },
          { "num": "7", "eng": "Seven", "native": "Sept", "char": "7" },
          { "num": "8", "eng": "Eight", "native": "Huit", "char": "8" },
          { "num": "9", "eng": "Nine", "native": "Neuf", "char": "9" },
          { "num": "10", "eng": "Ten", "native": "Dix", "char": "10" }
        ]
      },
      {
        "name": "Chinese",
        "nativeName": "中文",
        "icon": "assets/img/chinese.png",
        "iconBg": "#E84A46",
        "isFav": false,
        "sample": "Yi, er, san, si, wu...",
        "numbers": [
          { "num": "1", "eng": "One", "native": "Yī", "char": "一" },
          { "num": "2", "eng": "Two", "native": "Èr", "char": "二" },
          { "num": "3", "eng": "Three", "native": "Sān", "char": "三" },
          { "num": "4", "eng": "Four", "native": "Sì", "char": "四" },
          { "num": "5", "eng": "Five", "native": "Wǔ", "char": "五" },
          { "num": "6", "eng": "Six", "native": "Lìu", "char": "六" },
          { "num": "7", "eng": "Seven", "native": "Qī", "char": "七" },
          { "num": "8", "eng": "Eight", "native": "Bā", "char": "八" },
          { "num": "9", "eng": "Nine", "native": "Jiǔ", "char": "九" },
          { "num": "10", "eng": "Ten", "native": "Shí", "char": "十" }
        ]
      },
      {
        "name": "Dutch",
        "nativeName": "Nederlands",
        "icon": "assets/img/dutch.png",
        "iconBg": "#2887CB",
        "isFav": false,
        "sample": "Een, twee, drie, vier, vijf...",
        "numbers": [
          { "num": "1", "eng": "One", "native": "Een", "char": "1" },
          { "num": "2", "eng": "Two", "native": "Twee", "char": "2" },
          { "num": "3", "eng": "Three", "native": "Drie", "char": "3" },
          { "num": "4", "eng": "Four", "native": "Vier", "char": "4" },
          { "num": "5", "eng": "Five", "native": "Vijf", "char": "5" },
          { "num": "6", "eng": "Six", "native": "Zes", "char": "6" },
          { "num": "7", "eng": "Seven", "native": "Zeven", "char": "7" },
          { "num": "8", "eng": "Eight", "native": "Acht", "char": "8" },
          { "num": "9", "eng": "Nine", "native": "Negen", "char": "9" },
          { "num": "10", "eng": "Ten", "native": "Tien", "char": "10" }
        ]
      },
      {
        "name": "Russian",
        "nativeName": "Русский",
        "icon": "assets/img/russian.png",
        "iconBg": "#C8B65B",
        "isFav": false,
        "sample": "Ah-deen, dvah, tree, che-ti-ryeh, pyat'...",
        "numbers": [
          { "num": "1", "eng": "One", "native": "Adin", "char": "один" },
          { "num": "2", "eng": "Two", "native": "Dva", "char": "два" },
          { "num": "3", "eng": "Three", "native": "Tri", "char": "три" },
          { "num": "4", "eng": "Four", "native": "Chityri", "char": "четыре" },
          { "num": "5", "eng": "Five", "native": "Piat'", "char": "пять" },
          { "num": "6", "eng": "Six", "native": "	Shest'", "char": "шесть" },
          { "num": "7", "eng": "Seven", "native": "Sem'", "char": "семь" },
          { "num": "8", "eng": "Eight", "native": "Vosem'", "char": "восемь" },
          { "num": "9", "eng": "Nine", "native": "Deviat'", "char": "девять" },
          { "num": "10", "eng": "Ten", "native": "Desiat'", "char": "десять" }
        ]
      },
      {
        "name": "Hindi",
        "nativeName": "हिन्दी",
        "icon": "assets/img/hindi.png",
        "iconBg": "#FDBA01",
        "isFav": false,
        "sample": "Ek, do, teen, chaar, paanch...",
        "numbers": [
          { "num": "1", "eng": "One", "native": "Ek", "char": "१" },
          { "num": "2", "eng": "Two", "native": "Do", "char": "२" },
          { "num": "3", "eng": "Three", "native": "Teen", "char": "३" },
          { "num": "4", "eng": "Four", "native": "Chaar", "char": "४" },
          { "num": "5", "eng": "Five", "native": "Paanch'", "char": "५" },
          { "num": "6", "eng": "Six", "native": "	Chhah", "char": "६" },
          { "num": "7", "eng": "Seven", "native": "Saat'", "char": "७" },
          { "num": "8", "eng": "Eight", "native": "Aaath'", "char": "८" },
          { "num": "9", "eng": "Nine", "native": "Nou'", "char": "९" },
          { "num": "10", "eng": "Ten", "native": "Das'", "char": "१०" }
        ]
      },
      {
        "name": "Arabic",
        "nativeName": "العَرَبِيَّة",
        "icon": "assets/img/arabic.png",
        "iconBg": "#D16447",
        "isFav": false,
        "sample": "Wahed, Ethnein, Thalatha, Arba-a, Khamsa...",
        "numbers": [
          { "num": "1", "eng": "One", "native": "Wahed", "char": "واحد" },
          { "num": "2", "eng": "Two", "native": "Ethnein", "char": "اثنين" },
          { "num": "3", "eng": "Three", "native": "Thalatha", "char": "ثلاثة" },
          { "num": "4", "eng": "Four", "native": "Arba-a", "char": "أربعة" },
          { "num": "5", "eng": "Five", "native": "Khamsa", "char": "خمسة" },
          { "num": "6", "eng": "Six", "native": "Sitta", "char": "ستة" },
          { "num": "7", "eng": "Seven", "native": "Sab-a'", "char": "سبعة" },
          { "num": "8", "eng": "Eight", "native": "Thamanya", "char": "ثمانية" },
          { "num": "9", "eng": "Nine", "native": "Tis-a", "char": "تسعة" },
          { "num": "10", "eng": "Ten", "native": "Ashara", "char": "عشرة" }
        ]
      },
      {
        "name": "Portuguese",
        "nativeName": "Português",
        "icon": "assets/img/portuguese.png",
        "iconBg": "#173B7C",
        "isFav": false,
        "sample": "Um, Dois, Três, Quatro, Cinco...",
        "numbers": [
          { "num": "1", "eng": "One", "native": "Um", "char": "1" },
          { "num": "2", "eng": "Two", "native": "Dois", "char": "2" },
          { "num": "3", "eng": "Three", "native": "Três", "char": "3" },
          { "num": "4", "eng": "Four", "native": "Quatro", "char": "4" },
          { "num": "5", "eng": "Five", "native": "Cinco", "char": "5" },
          { "num": "6", "eng": "Six", "native": "Seis", "char": "6" },
          { "num": "7", "eng": "Seven", "native": "Sete", "char": "7" },
          { "num": "8", "eng": "Eight", "native": "Oito", "char": "8" },
          { "num": "9", "eng": "Nine", "native": "Nove", "char": "9" },
          { "num": "10", "eng": "Ten", "native": "Dez", "char": "10" }
        ]
      },
      {
        "name": "Italian",
        "nativeName": "Italiano",
        "icon": "assets/img/italian.png",
        "iconBg": "#E9743E",
        "isFav": false,
        "sample": "Uno, Due, Tre, Quattro, Cinque...",
        "numbers": [
          { "num": "1", "eng": "One", "native": "Uno", "char": "1" },
          { "num": "2", "eng": "Two", "native": "Due", "char": "2" },
          { "num": "3", "eng": "Three", "native": "Tre", "char": "3" },
          { "num": "4", "eng": "Four", "native": "Quattro", "char": "4" },
          { "num": "5", "eng": "Five", "native": "Cinque", "char": "5" },
          { "num": "6", "eng": "Six", "native": "Sei", "char": "6" },
          { "num": "7", "eng": "Seven", "native": "Sette", "char": "7" },
          { "num": "8", "eng": "Eight", "native": "Otto", "char": "8" },
          { "num": "9", "eng": "Nine", "native": "Nove", "char": "9" },
          { "num": "10", "eng": "Ten", "native": "Dieci", "char": "10" }
        ]
      },
      {
        "name": "Bengali",
        "nativeName": "Bangla",
        "icon": "assets/img/bengali.png",
        "iconBg": "#C8B65B",
        "isFav": false,
        "sample": "Ek, Dui, Tin, Chā, Pāṅch...",
        "numbers": [
          { "num": "1", "eng": "One", "native": "Ek", "char": "১" },
          { "num": "2", "eng": "Two", "native": "Dui", "char": "২" },
          { "num": "3", "eng": "Three", "native": "Tin", "char": "৩" },
          { "num": "4", "eng": "Four", "native": "Chā", "char": "৪" },
          { "num": "5", "eng": "Five", "native": "Pāṅch", "char": "৫" },
          { "num": "6", "eng": "Six", "native": "Chhɔẏ", "char": "৬" },
          { "num": "7", "eng": "Seven", "native": "Sāt", "char": "৭" },
          { "num": "8", "eng": "Eight", "native": "āṭh", "char": "৮" },
          { "num": "9", "eng": "Nine", "native": "Nɔẏ", "char": "৯" },
          { "num": "10", "eng": "Ten", "native": "Dɔś", "char": "১০" }
        ]
      },
      {
        "name": "Latin",
        "nativeName": "Latīna",
        "icon": "assets/img/latin.png",
        "iconBg": "#FFE000",
        "isFav": false,
        "sample": "Ūnus, Duo, Trēs, Quattuor, Quīnque...",
        "numbers": [
          { "num": "1", "eng": "One", "native": "Ūnus", "char": "I" },
          { "num": "2", "eng": "Two", "native": "Duo", "char": "II" },
          { "num": "3", "eng": "Three", "native": "Trēs", "char": "III" },
          { "num": "4", "eng": "Four", "native": "Quattuor", "char": "IV" },
          { "num": "5", "eng": "Five", "native": "Quīnque", "char": "V" },
          { "num": "6", "eng": "Six", "native": "Sex", "char": "VI" },
          { "num": "7", "eng": "Seven", "native": "Septem", "char": "VII" },
          { "num": "8", "eng": "Eight", "native": "Octō", "char": "VIII" },
          { "num": "9", "eng": "Nine", "native": "Novem", "char": "IX" },
          { "num": "10", "eng": "Ten", "native": "Decem", "char": "X" }
        ]
      },
      {
        "name": "Greek",
        "nativeName": "ελληνικά",
        "icon": "assets/img/greek.png",
        "iconBg": "#197C17",
        "isFav": false,
        "sample": "Ena, Dio, Tria, Tessera, Pente...",
        "numbers": [
          { "num": "1", "eng": "One", "native": "Ene", "char": "1" },
          { "num": "2", "eng": "Two", "native": "Dio", "char": "2" },
          { "num": "3", "eng": "Three", "native": "Tria", "char": "3" },
          { "num": "4", "eng": "Four", "native": "Tessera", "char": "4" },
          { "num": "5", "eng": "Five", "native": "Pente", "char": "5" },
          { "num": "6", "eng": "Six", "native": "Exi", "char": "6" },
          { "num": "7", "eng": "Seven", "native": "Efta", "char": "7" },
          { "num": "8", "eng": "Eight", "native": "Octo", "char": "8" },
          { "num": "9", "eng": "Nine", "native": "Ennea", "char": "9" },
          { "num": "10", "eng": "Ten", "native": "Deka", "char": "10" }
        ]
      }
    ];

    for (let language of languages) {
      this.languages.push(new Language(language));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.languages;
    }

    return this.languages.filter((language) => {
      for (let key in params) {
        let field = language[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return language;
        } else if (field == params[key]) {
          return language;
        }
      }
      return null;
    });
  }

}
