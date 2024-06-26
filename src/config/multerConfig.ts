import multer from 'multer'
import crypto from 'crypto'


//configuração do multer para definir onde salvar os arquivos e fazer os devidos tratamentos
export default {
    directory: '/tmp',
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, '/tmp')
        },
        filename(req, file, callback) {
            const fileHash = crypto.randomBytes(10).toString('hex');
            const fileName = `${fileHash}-${file.originalname}`;
            return callback(null, fileName);
        }
    })
}