(function(doc,win){
  let docEl = doc.documentElement
  let clientWidth = docEl.clientWidth
  docEl.style.fontSize = 20*(clientWidth/375)+'px'

})(document,window)