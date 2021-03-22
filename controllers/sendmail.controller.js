require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.EMAIL_API_KEY);
const {emailTemplate} = require('../config/template.config')
const mailTemplates = require('../templates/mail.templates');

const sendmailController = {
    sendMail: async ()=>{
        const {html} =  emailTemplate(mailTemplates(), {name: 'Lucas Andres Marsell', url: `${process.env.API_URL/test/saludar}`})

        const emailData = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: 'email test',
            html
        }

        try {
            await sgMail.send(emailData)
            return ({success: true, message: `Se le ha enviado a su correo, un link para recibir un saludo desde el servidor`})
        } catch (error) {
            return ({success: false, message: error})
        }
    }
}


module.exports = sendmailController;