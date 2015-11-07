
/**
 * Menubar modulu detaylar : https://github.com/maxogden/menubar
 */
var menubar = require('menubar')

var mb = menubar({
  height : 509,
  y : 30,
  "always-on-top": true,
  "showDockIcon": true
})

mb.on('ready', function ready () {
  console.log('çalışıyor..')
})
