var fs = require('fs')

module.exports = function(path, features, type, done){
  switch(type) {
    case 'geojson':
      fs.writeFile(path, JSON.stringify(features), function(err){
        done(err, 1)
      })
      break
  }
  
}