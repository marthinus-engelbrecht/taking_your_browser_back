class Router {
    constructor() {
        this._states = [];
    }

    _updateStateByPath(path) {
        this._currentState = this._states.find((state) => {
            let found = state.path === path;
            if (found) {
                //Injected
                this.document.title = state.title;
                this.componentPlaceholder.updateContent(state.html);
            }
            return found;
        });
    }

    _updateStateByName(name) {
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
    registerState(state) {
        this._states.push(state);
    }

    getStates() {
        return this._states;
    }

    goto(nameOrPath) {
        nameOrPath.includes('/') ? this._updateStateByPath(nameOrPath) : this._updateStateByName(nameOrPath);
    }

    getCurrentState() {
        return this._currentState;
    }
}

export default Router;