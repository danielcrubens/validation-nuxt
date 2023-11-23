import nodemailer from 'nodemailer';
const config = useRuntimeConfig();

//Configurando o mensageiro (transporter):
const transporter = nodemailer.createTransport({
  host: config.MAILHOST,
  port: config.MAILPORT,
  secure: false,
  auth: {
    user: config.MAILUSER,
    pass: config.MAILPASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

//Lidando com eventos (export default defineEventHandler):
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    //Preparando e enviando o e-mail:
    const mailOptions = {
      from: `"${body.name}" <${body.email}>`,
      to: config.CONTACTMAIL,
      subject: body.subject,
      text: body.message,
      html: body.message,
    };

    const mail = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', mail.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(mail));

    //Tratando resultados e erros:
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Enviado!' }),
    };
  } catch (error) {
    sendError(event, createError({ statusCode: 500, statusMessage: error.message }));
  }
});
