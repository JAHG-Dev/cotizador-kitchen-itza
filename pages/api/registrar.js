import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import Handlebars from 'handlebars';
import fs from 'fs';

var readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);ß
        } else {
            callback(null, html);
        }
    });
}

let transporter = nodemailer.createTransport(smtpTransport({
    host: 'bh7114.banahosting.com',
    port: 465,
    secure: true,
    auth: {
        user: 'cotizaciones@kitchenitza.com.mx',
        pass: 'Y08Xyr14*H1B'
    }
}));

export default function handler(req, res) {

    if (req.method === 'POST') {
        const body = req.body;
        const { cliente_nombre, cliente_telefono, cliente_correo, cocina_foto , cocina_estilo, cocina_medidas, cocina_color, cocina_material_cubierta, cocina_material_frente, cocina_costo } = body;
        const data = {
            cliente_nombre,
            cliente_telefono,
            cliente_correo,
            cocina_foto,
            cocina_estilo,
            cocina_medidas,
            cocina_color,
            cocina_material_cubierta,
            cocina_material_frente,
            cocina_costo
        };

        readHTMLFile('./pages/api/correo.html', function(err, html) {
            var template = Handlebars.compile(html);
            var htmlToSend = template(data);
            var mailOptions = {
                from: "cotizaciones@kitchenitza.com.mx",
                to: data.cliente_correo,
                bcc: "ventas@kitchenitza.com.mx",
                subject: 'Cotización Kitchen Itzá',
                html: htmlToSend
            };

            transporter.sendMail(mailOptions, function(error, response){
                if(error){
                    res.end("error");
                    console.log(error);
                }else{
                    res.status(200).json({
                        status: 'success',
                        message: 'Correo enviado correctamente'
                    });
                }
            });
        });
    }
  }
  