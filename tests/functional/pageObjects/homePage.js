import Page from './page.js';

class HomePage extends Page{
  constructor(){
    super();
  }

  open(){
    return super.open('/home');
  }

  register(){
    return browser.clickShadowElement('home-page', '#register');
  }
}

export default HomePage;