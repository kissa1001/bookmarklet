(function(){
var string = document.getElementsByTagName('body')[0].innerText;
function cloudWords(string) {
  var words1 = string.replace(/\W*\b\w{1,4}\b/g, "");
  var words = words1.replace(/[.]/g, '').split(/\s/);
  var cloudWords = {
  }
  ;
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
  var max = 10;
  var min = 1;
  var fontMin = 10;
  var fontMax = 20;
  for (var i in words){
    var word = words[i];
    var size = word.Uses == min ? fontMin     : (word.Uses / max) * (fontMax - fontMin) + fontMin;
    var paragraph = document.createElement("p");
    paragraph.style.fontSize = size + "px";
    paragraph.style.display = "inline";
    paragraph.innerHTML = word.Name + " ";
    document.body.appendChild(paragraph);
  }
}
sortBySize(cloudWords(string));
}