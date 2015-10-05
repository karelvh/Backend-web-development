(function(){"use strict";})();

var Loader = (function(){
    //private vars
    var users = [];
    var startTime = startTime? startTime: new Date().getTime();

    //instance vars...
    var duration = function(){
        return (new Date().getTime() - startTime );
    };
    var loadAsync = function (element , cb) {
        if (element === "ERROR"){
            cb("ERROR", null);
        } else {
            setTimeout(function () { cb(null, element + " is loaded"); }, 1000);
        }
    };

    var loadArrayAsync = function (arrayA , elements, cb) {
        start = new Date().getTime(); //reïnitialize
        var counter = 0;

        for (var element in elements) {
            var sElement = elements[element];
            loadAsync(sElement, function (err, element) {
                if (err) {
                    arrayA[counter] = element;
                    cb(err, null);
                } else {
                    arrayA[counter] = element; //undefined
                    console.log(arrayA[counter]);
                    if (++counter === usersIds.length){
                        cb(arrayA);
                    }
                }
            });
        }
    };

    return {
        loadArrayAsync: loadArrayAsync
    };
});


//HELPERS----------------------------
function sleep(time) {
    var start = new Date().getTime();
    while (new Date().getTime() - start < time) {
    //just wait
    }
}

module.exports = Loader;
