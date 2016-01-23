class Router {
    constructor() {
        this._states = [];
    }

    registerState(state) {
        this._states.push(state);
    }

    getStates() {
        return this._states;
    }

    goto(name) {
        this._currentState = this._states.find((state) => {
            let found = state.name === name;
            if (found) {
                //Injected
                this.history.pushState(state.title, null, state.path);
                this.document.title = state.title;
                this.componentPlaceholder.updateContent(state.html);
            }
            return found;
        });
    }

    getCurrentState() {
        return this._currentState;
    }
}

export default Router;