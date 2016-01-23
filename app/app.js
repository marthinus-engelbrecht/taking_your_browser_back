import 'injector';
import HomePage from 'homePage';
import Router from 'router';
import ComponentPlaceholder from 'componentPlaceholder'

let router = new Router();

document.registerElement('component-placeholder', ComponentPlaceholder);

let componentPlaceholder = document.querySelector('component-placeholder');

router.registerState({
    name: 'register',
    path: '/register/wizard/step1',
    title: 'Wizard - Step 1',
    html: `<input type="date">`
});

router.registerState({
    name: 'home',
    path: '/home',
    title: 'One step back',
    html: `<home-page></home-page>`
});


router.history = history;
router.document = document;
router.componentPlaceholder = componentPlaceholder;

injector.register('router', router);

document.registerElement('home-page', HomePage);

router.goto('home');
