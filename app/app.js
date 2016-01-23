import 'injector';
import HomePage from 'homePage';
import Router from 'router';
import ComponentPlaceholder from 'componentPlaceholder'

let router = new Router();

router.registerState({
    name: 'register',
    path: '/register/wizard/step1',
    title: 'Wizard - Step 1'
});

router.history = history;
router.document =  document;

injector.register('router', router);

document.registerElement('home-page', HomePage);
document.registerElement('component-placeholder', ComponentPlaceholder);
