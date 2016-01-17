export default {
    createWebComponent(componentName, contructor) {
        document.registerElement(componentName, contructor);
        let component = document.createElement(componentName);
        return component;
    },

    appendToDOM(component){
        let body = document.getElementsByTagName('body')[0];
        body.appendChild(component);
    }
}