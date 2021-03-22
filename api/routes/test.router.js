const router = require('express').Router();
const {sendMailController} = require('../../controllers/index')

const testRouter = (app)=>{
    
    app.use('/test')
    
    router.get('/enviar', async (_, res)=>{
        const {success, message} = await sendMailController.sendMail();
        if(success){
            res.json({message}).status(200)
        }else{
            res.json({message}).status(400)
        }
    });

    router.get('/saludar', (_, res)=>{
        res.json({message: 'Hola saludos'})
    })
}

module.exports = testRouter;