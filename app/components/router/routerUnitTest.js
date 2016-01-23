import Router from './router.js';
import {using} from 'rock-solid';

describe(`Given the router has been created`, function() {
    let router;
    let homeState = {
        name: 'home',
        path: '/home',
        title: 'One step back',
        html: '<input type="date">'
    };

    let stepOneState = {
        name: 'step1',
        path: '/step1',
        title: 'Wizard - Step 1'
    };

    let history, document, componentPlaceholder;

    beforeEach(function() {
        history = jasmine.createSpyObj('history', [ 'pushState' ]);
        componentPlaceholder = jasmine.createSpyObj('componentPlaceholder', [ 'updateContent' ]);
        document = {};
        router = new Router();
        router.history = history;
        router.document = document;
        router.componentPlaceholder = componentPlaceholder;
    });

    describe(`when a state is registered`, function() {

        beforeEach(function() {
            router.registerState(homeState);
        });

        it(`it should be in the states array`, function() {
            let statesArray = router.getStates();
            expect(statesArray).toContain(homeState)
        });
    });

    describe(`and some states have been registered`, function() {
        beforeEach(function() {
            router.registerState(homeState);
            router.registerState(stepOneState);
        });

        using([
            {
                input: 'name'
            },
            {
                input: 'path'
            }
        ], function(type) {
            describe(`when router.goto() is called with a '${type}'`, function() {
                beforeEach(function() {
                    router.goto(homeState[type]);
                });

                it(`it should set the current state to the state matching the name`, function() {
                    let currentState = router.getCurrentState();
                    expect(currentState).toEqual(homeState);
                });

                it(`it should set the title to that of the state`, function() {
                    expect(document.title).toEqual(homeState.title)
                });

                it(`it should call componentPlaceholder.updateContent()`, function() {
                    expect(componentPlaceholder.updateContent).toHaveBeenCalledWith(homeState.html);
                });
            });
        });

        describe(`when router.goto() is called with a 'name'`, function() {
            beforeEach(function() {
                router.goto(homeState.name);
            });

            it(`it should update the history with the path of that state`, function() {
                expect(history.pushState).toHaveBeenCalledWith(homeState.title, null, homeState.path);
            });
        });
    });

    describe(`when the 'popstate' event occurs `, function() {
        beforeEach(function() {
            router.goto = jasmine.createSpy('goto')

            let event = new Event('popstate');
            window.dispatchEvent(event);
        });

        it(`it should call router.goto with the current url`, function(done) {
            setTimeout(function(){
                expect(router.goto).toHaveBeenCalledWith(location.pathname);
                done();
            }, 100);
        });
    });

    afterEach(function() {
        window.removeEventListener('popstate', router.onPopstate)
    });

});