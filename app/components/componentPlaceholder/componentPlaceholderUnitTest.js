import WebComponentHelper from 'WebComponentHelper';
import ComponentPlaceholder from './componentPlaceholder.js';


describe(`Given the 'view' web component has been created`, function() {
    let componentPlaceholder;
    beforeEach(function() {
        componentPlaceholder = WebComponentHelper.createWebComponent('component-placeholder', ComponentPlaceholder);
        WebComponentHelper.appendToDOM(componentPlaceholder)
    });

    describe(`when updateContent() is called with a web component`, function() {
        let theWebComponent;

        beforeEach(function() {
            let html = `<input type="date"/>`;
            theWebComponent = WebComponentHelper.createComponentFromHtml(html);
            componentPlaceholder.updateContent(html);
        });

        it(`it should replace the views content with the web component`, function() {
            expect(componentPlaceholder.firstChild).toEqual(theWebComponent);
        });
    });
});