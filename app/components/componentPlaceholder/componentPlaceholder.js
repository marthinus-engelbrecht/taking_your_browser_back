class ComponentPlaceholder extends HTMLElement {
    updateContent(webComponent){
        this.innerHTML = webComponent;
    }
}

export default ComponentPlaceholder