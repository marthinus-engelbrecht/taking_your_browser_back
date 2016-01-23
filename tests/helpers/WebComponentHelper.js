export default {
    createWebComponent(componentName, contructor) {
        document.registerElement(componentName, contructor);
        let component = document.createElement(componentName);
        return component;
    },

    appendToDOM(component){
        let body = document.getElementsByTagName('body')[ 0 ];
        body.appendChild(component);
    },

    createComponentFromHtml(html) {
        let wrapper = document.createElement(`div`);
        wrapper.innerHTML = html;
        let theWebComponent = wrapper.firstChild;
        return theWebComponent;
    }
}