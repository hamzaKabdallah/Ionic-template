import { Injectable } from '@angular/core';
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig
} from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AdmobFreeService {
  // isTesting should be false in production
  interstitialConfig: AdMobFreeInterstitialConfig = {
    isTesting: true, // Remove in production
    autoShow: false,
    id: 'ca-app-pub-6247018283672124/8799549515'
  };


  constructor(private admobFree: AdMobFree, private platform: Platform) {
    this.platform.ready().then(() => {
      this.admobFree.interstitial.config(this.interstitialConfig);
      this.admobFree.interstitial.prepare()
        .then(() => { }).catch(e => alert(e));
    });

    this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
      this.admobFree.interstitial.prepare()
        .then(() => { }).catch(e => alert(e));
    });
  }



  showBannerAd() {
    const bannerConfig: AdMobFreeBannerConfig = {
      // isTesting should be false in production
      isTesting: true, // Remove in production
      autoShow: true,
      bannerAtTop: false,
      id: 'ca-app-pub-6247018283672124/9261201051'
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare().then(() => {
      // success
    }).catch(e => alert(e));
  }

  showInterstitialAd() {
    this.admobFree.interstitial.isReady().then(() => {
      this.admobFree.interstitial.show().then(() => {
      })
        .catch(e => alert('show ' + e));
    })
      .catch(e => alert('isReady ' + e));
  }
}
