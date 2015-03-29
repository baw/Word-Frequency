# Word Frequency Bookmarklet

This bookmarklet scans through a webpage and creates a list of all words on the
page. It then shows the list of words with different font sizes based on the
frequency of the word.

## Installation

Drag this link to your bookmark bar or copy it and add it as a new bookmark.

[Word Frequency](javascript:(function(){var n=35,t=1,e={},o=function(n,t){for(t(n),n=n.firstChild;n;)o(n,t),n=n.nextSibling},r=function(n){if("#text"===n.nodeName)for(var t=n.textContent.replace(/[^A-Za-z]/g," "),o=t.split(" "),r=0;r<o.length;r++){var i=o[r].toLowerCase();i.length<4||(void 0===e[i]?e[i]=1:e[i]++)}},i=function(n){for(var t=Object.keys(n).sort(),e=d(n,t),o=document.createElement("div"),r=0;r<t.length;r++){var i=t[r],u=n[i],c=document.createElement("div");c.style.fontSize=e(u)+"px",c.textContent=i,o.appendChild(c)}var a=window.open();a.document.body.appendChild(o)},u=function(n,t,e,o){return t-=n,function(r){return r-=n,r/t*o+e}},c=function(n,t){return n-t},a=function(n,t){return t.map(function(t){return n[t]})},d=function(e,o){var r=a(e,o);return r.sort(c),u(r[0],r[r.length-1],t,n)};o(document.body,r),i(e)}();)())