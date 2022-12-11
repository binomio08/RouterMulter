import express from 'express'
import multer from 'multer'

const storage = multer.diskStorage({
    destination: function(req, file, cb) {cb(null, 'public/img')},
    filename: function(req, file, cb) {cb(null, file.originalname)}
})

const uploader = multer ({storage})

const app = express()

app.post('/', uploader.single('file'), (req, res)=>{
    if(!req.file) {
        return res.status(400).send({status: 'error', error:"No se pudo guarda la Imagen"})
    }

    console.log(req.file);

    const filePath = req.file.path
    console.log(filePath);
    res.send({status: 'success', message: 'Image Uploaded!!'})
})
app.listen(8080)