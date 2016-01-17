import 'injector';

describe(`Given the injector is loaded`, function() {

    describe(`when injector get is called`, function() {
        let expectedObjectInstance, objectInstance;
        beforeEach(function() {
            expectedObjectInstance = {
                name: 'this is a monkey'
            };

            injector.register('monkey', expectedObjectInstance);

        });

        describe(`and the object is registered in the injector`, function() {
            it(`it should return the object instance that matches the name`, function() {
                objectInstance = injector.get('monkey');
                expect(objectInstance).toEqual(expectedObjectInstance);
            });
        });

        describe(`and the object is not registered in the injector`, function() {
            it(`it should return undefined`, function() {
                objectInstance = injector.get('monkeyfadsdf');

                expect(objectInstance).toEqual(undefined);
            });
        });
    });
});