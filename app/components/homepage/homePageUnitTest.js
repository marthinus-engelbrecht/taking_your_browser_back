import 'injector';
import HomePage from 'homePage';
import WebComponentHelper from 'WebComponentHelper';

describe(`Given the home page web component has been created`, function() {
    let homePage, router;
    beforeEach(function() {
        homePage = WebComponentHelper.createWebComponent('home-page', HomePage);
        router = jasmine.createSpyObj('router', [ 'goto' ]);
        injector.register('router', router);
        WebComponentHelper.appendToDOM(homePage);
    });

    describe(`when register is clicked`, function() {
        it(`it should call router.goto()`, function() {
            homePage.registerButton.click();
            expect(router.goto).toHaveBeenCalledWith('/register/wizard/step1');
        });
    });
});