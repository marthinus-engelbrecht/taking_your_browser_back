'use strict';

class Injector{
    constructor(){
        this._container = [];
    }

    register(name, instance){
        this._container.push({
            name: name,
            instance: instance
        })
    }

    get(name){
        let item = this._container.find(function(item){
            return item.name === name;
        });
        return item ? item.instance : undefined;
    }
}

var injector = new Injector();