const multer = require('multer');
const crypto = require('crypto');
const { resolve, extname } = require('path');


const multerConfig = multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, arquivo, cb) => {
        crypto.randomBytes(16, (erro, valor) => {
            if(erro) {
                return cb(erro)
            }
            return cb(null, valor.toString('hex') + extname(arquivo.originalname))
        })
    }
})

module.exports = multerConfig;
