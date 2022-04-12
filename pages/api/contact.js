export default function (req,res){
    require('dotenv').config()
        
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'bot.zenotech@gmail.com',
          pass: 'zenotech1922'
        },
        secure: true,
      })

      const mailData = {
        from: 'bot.zenotech@gmail.com',
        to: 'ergo255@gmail.com',
        subject: `Message From ${req.body.name}`+` ${req.body.surname}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `${req.body.message}</br><p>Sent from:
        ${req.body.email} Number: ${req.body.number}</p>`,
       }

       transporter.sendMail(mailData, function(err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
          console.log(`${req.body.cv}`)
      })

      res.status(200)
      res.send()
}