var GetText = function(){};

GetText.prototype.reader = function(text, cb){
   var results = [];

   var lines = text.split('\n');
   lines.forEach(function (line, index){
      results[index] = "lijn" + index + ":" + line;
   });

   cb(null, results);
};
