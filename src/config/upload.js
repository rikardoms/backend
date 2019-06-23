const multer = require('multer');
const path =  require('path');


module.exports = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname,'..','..','uploads'),
    filename: function(req, file, callback) {
      //função chamada quando o processamento que se deseja fazer é concluído
      callback(null, file.originalname)
    }
  })
}
