import Page from './page.js';

class HomePage extends Page{
  constructor(){
    super();
    this.register = browser.element('#register');
  }

  * open(){
    return yield super.open('/home');
  }
}

export default HomePage;