function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction(){
    return function fn(){
        return fn();
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return 'something';
    }
}