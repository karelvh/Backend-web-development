var delay = 1000;
var users = [];
var userIds = [0,1,2,3,4,5,6,7,8,9];
var start = new Date().getTime();

//ASYNC

function loadArrayAsync(arrayA, elements, cb){
  var counter = 0;
	for(var element in elements){
		loadAsync(element, function(element){
			arrayA[element] = element;
			console.log(arrayA[element]);
			if (++counter === elements.length) {
				cb(arrayA);
			}
		});
	}
}

function loadAsync(element, cb){
	setTimeout(function(){
		cb("element " + element + " loaded async");}, delay);
}
loadArrayAsync(users, userIds, function(users){
	console.log("async loadtime :", (new Date().getTime()-start));
});
