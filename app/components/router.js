class Router {
  constructor(){
    this._states = [];
  }

  registerState(state) {
    this._states.push(state);
  }

  getStates(){
    return this._states;
  }

  goto(path){
    this._currentState = this._states.find((state) =>{
        let found = state.path === path;
        if(found){
          //Injected
          this.history.pushState(null, null, path);
        }
        return found;
    });
  }

  getCurrentState(){
    return this._currentState;
  }
}


export default Router;