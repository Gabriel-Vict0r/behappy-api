import AWS, { AWSError, S3 } from 'aws-sdk'
import path from 'path'
import multerConfig from '../config/multer'
import fs from 'fs'
class S3Storage {
    //constrói o atributo que possui as informações do client
    private client: S3;

    constructor() {
        this.client = new AWS.S3({
            region: 'us-east-1'
        })
    }

    async saveFile(filename: string): Promise<void> {
        const originalPath = path.resolve(multerConfig.directory, filename);

        //por algum motivo o mime só funciona importando assim
        const mime = require('mime');

        //separa o tipo de arquivo que está na pasta
        const contentType = mime.getType(originalPath);
        if (!contentType) {
            throw new Error("arquivo não encontrado");
        }

        //lê o arquivo que está no diretório especificado no multer
        const fileContent = await fs.promises.readFile(originalPath);

        //função que faz o upload do arquivo para as nuvens (AWS bucket)
        this.client.putObject({
            Bucket: 'housesafebucket',
            Key: filename,
            ACL: 'public-read',
            Body: fileContent,
            ContentType: 'image/*'
        }, (err: AWSError, data: S3.PutObjectOutput) => {
            if (err) {
                return new Error("erro ao fazer upload do arquivo");
            }
        }).promise()

        //após fazer o upload, o arquivo será removido do diretório
        await fs.promises.unlink(originalPath)
    }
}

export default S3Storage