(function () {
  var words = {};
  
  var traverseDOM = function (elm, cb) {
    cb(elm);
    
    elm = elm.firstChild;
    while (elm) {
      traverseDOM(elm, cb);
      elm = elm.nextSibling;
    }
  };
  
  var countWords = function (elm) {
    if (elm.nodeName !== "#text")  return;
    
    var text = elm.textContent.replace(/[^A-Za-z]/g, " ");
    var ws = text.split(" ");
    
    for (var i = 0; i < ws.length; i++) {
      var word = ws[i].toLowerCase();
      
      if (word.length < 4) continue;
      
      if (words[word] === undefined) {
        words[word] = 1;
      } else {
        words[word]++;
      }
    }
  };
  
  traverseDOM(document.body, countWords);
})();