import { Practica2AngularAgustinMuniozCamposPage } from './app.po';

describe('practica2-angular-agustin-munioz-campos App', () => {
  let page: Practica2AngularAgustinMuniozCamposPage;

  beforeEach(() => {
    page = new Practica2AngularAgustinMuniozCamposPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to pr2!');
  });
});
