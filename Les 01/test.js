//console.log("Hello world");
//meerdere processen

//setTimeout(function (){
//  console.log(process.argv[0].toString());
//}, 0);

//synchroon command -> eerst
//console.log("Hello world!");

//mix niet synchroon en asynchroon
//for (var i = process.argv.length-1; i >= 0; i--) { //-> sync
	//console.log(process.argv[i]);
	//setTimeout(function	(){console.log(i);},0); //-> async
	//console.log	(i); //->sync
//};

if (!process.argv[2] || process.argv[2] === "--help") {
	displayHelp();
};

if (process.argv[2] === "--name"){
	console.log("Welcome " + process.argv[3]);
};

function displayHelp(){
	console.log("How to use:");
	console.log("--help \t show this help file");
	console.log("--name \t say welcome to {NAME}");
}