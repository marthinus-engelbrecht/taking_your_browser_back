import HomePage from './pageObjects/homePage.js'

describe(`Given the user is on the home page`, function () {
  let homePage;

  beforeEach(function* () {
    homePage = new HomePage();
    return yield homePage.open();
  });

  it(`the title should be 'One step back'`, function* () {
    let title = yield browser.getTitle();
    expect(title).toEqual('One step back');
  });

  it(`the user should be able to start the registration process`, function* () {
    yield homePage.register();
    let title = yield browser.getTitle();

    expect(title).toEqual('Wizard - Step 1')
  });

  //describe(`and the register `, function() {
  //
  //});
});