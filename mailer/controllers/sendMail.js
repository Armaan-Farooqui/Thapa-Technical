const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'elton6@ethereal.email',
            pass: 'Nq1Mbs3ZVb4t8aZ1tP'
        },
    });
    let info = await transporter.sendMail({
        from: '"Vinod Thapa" <thapa@gmail.com>',
        to: "xve@gmail.com",
        subject: "Hello Thapa",
        text: "Hello YT Thapa",
        html: "<b>Hello YT Thapa</b>",
    })

    console.log("Message sent: %s", info.messageId);

    res.json(info);
};

module.exports = sendMail;