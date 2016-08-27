(function(){
var string = document.getElementsByTagName('body')[0].innerText;
function cloudWords(string) {
  var words1 = string.replace(/\W*\b\w{1,4}\b/g, "");
  var words = words1.replace(/[.]/g, '').split(/\s/).sort();
  var cloudWords = {};
  words.forEach(function(w) {
        if (!cloudWords[w]) {
            cloudWords[w] = 0;
        }
        cloudWords[w] += 1;
    });
  var array = [];
  for(var item in cloudWords){
    if(cloudWords.hasOwnProperty(item)){
      array.push({Name:item,Uses:cloudWords[item]});
    }
  }
  return array;
}
function sortBySize(words){
  var max = 20;
  var min = 1;
  var fontMin = 40;
  var fontMax = 70;
  for (var i in words){
    var word = words[i];
    var size = word.Uses == min ? fontMin     : (word.Uses / max) * (fontMax - fontMin) + fontMin;
    document.body.style.fontSize = size + "px";
    document.body.style.display = "inline";
    document.body.style.color = "#fff";
    document.body.style.backgroundColor = "#444";
    var paragraph = word.Name + " ";
    document.write(paragraph);
  }
}
sortBySize(cloudWords(string));
})();