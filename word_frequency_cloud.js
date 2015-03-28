(function () {
  var MAX_FONT_SIZE = 35;
  var MIN_FONT_SIZE = 1;
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
  
  var displayWords = function (wordsMap) {
    var wordList = Object.keys(wordsMap).sort();
    var scaler = scaleWordLength(wordsMap, wordList);
    
    var html = document.createElement("div");
    for (var i = 0; i < wordList.length; i++) {
      var word = wordList[i];
      var num = wordsMap[word];
      
      var div = document.createElement("div");
      div.style.fontSize = scaler(num) + "px";
      
      div.textContent = word;
      
      html.appendChild(div);
    }
    
    var w = window.open();
    w.document.body.appendChild(html);
  };
  
  var numScale = function (rangeMin, rangeMax, outputMin, outputMax) {
    rangeMax -= rangeMin;
    
    return function _numScale(num) {
      num -= rangeMin;
      return ((num / rangeMax) * outputMax) + outputMin;
    };
  };
  
  var numSort = function (first, second) {
    return first - second;
  };
  
  var objectToValues = function (map, keys) {
    return keys.map(function (key) {
      return map[key];
    });
  };
  
  var scaleWordLength = function (map, list) {
    var values = objectToValues(map, list);
    values.sort(numSort);
    
    return numScale(
      values[0],
      values[values.length - 1],
      MIN_FONT_SIZE,
      MAX_FONT_SIZE
    );
  };
  
  traverseDOM(document.body, countWords);
  displayWords(words);
})();