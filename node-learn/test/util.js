/**
 * Created by kongming on 2015/12/22.
 */

var util = require('util');

function Base(){
    this.name = "node";
    this.age = 19;
    this.sayHello = function(){
        console.log( "say hello to " + this.name);
    }
}

Base.prototype.showName = function(){
    console.log(this.name);
}

function Sub(){
    this.name = "sub";
}


util.inherits(Sub,Base);

var base = new Base();

base.sayHello();
base.showName();

var sub = new Sub();
sub.showName();


function Person(){
    this.name = "person";
    this.toString = function () {
        return this.name;
    }
}

var obj  = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));