import Router from './router.js';

describe(`Given the router has been created`, function () {
  let router;
  let homeState = {
    name: 'home',
    path: '/home'
  };

  let stepOneState = {
    name: 'step1',
    path: '/step1'
  };

  let history;

  beforeEach(function () {
      history = jasmine.createSpyObj('history', ['pushState']);
      router = new Router();
      router.history = history;
  });

  describe(`when a state is registered`, function () {

    beforeEach(function () {
        router.registerState(homeState);
    });

    it(`it should be in the states array`, function () {
        let statesArray = router.getStates();
        expect(statesArray).toContain(homeState)
    });
  });

  describe(`and some states have been registered`, function () {
    beforeEach(function () {
      router.registerState(homeState);
      router.registerState(stepOneState);
    });

    describe(`when router.goto() is called with a path`, function () {
      beforeEach(function () {
        router.goto(homeState.path);
      });

      it(`it should set the current state to the state matching the path`, function () {
        let currentState = router.getCurrentState();
        expect(currentState).toEqual(homeState);
      });

      it(`it should call history.pushState() with the path`, function () {
        expect(history.pushState).toHaveBeenCalledWith(null, null, homeState.path);
      });
    });
  });

});