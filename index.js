function receivesAFunction(spy){//takes a callback function as an argument
    //call the callback function
    console.log(spy());
    //doesn't matter what the function returns
    return 'Oh hello!';
}

function returnsANamedFunction(){//takes no arguments
    //return a named function
    return function fn(){
        return 'Oh hello there!';
    }
}

function returnsAnAnonymousFunction(){//takes no arguments
    //return an anonymous function
    return () => 'Oh hello there friend!';
}