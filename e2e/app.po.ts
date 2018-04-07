import { browser, by, element } from 'protractor';

export class Practica2AngularAgustinMuniozCamposPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pr2-root h1')).getText();
  }
}
