import * as nodemailer from "nodemailer";
import envConfig from "./env.config";
import path from "path";

// Transporter
const transporter = nodemailer.createTransport({
    service: "Auth Email Service",
    host: envConfig.node_mailer.host,
    port: envConfig.node_mailer.port,
    secure:false,
    auth:{
        user: envConfig.node_mailer.user,
        pass: envConfig.node_mailer.pass
    } 
})

// Load handlebars dynamically to prevent ESM import issues
const loadHandlebars = async () => {
    const { default: hbs } = await import("nodemailer-express-handlebars");
    transporter.use("compile", hbs({
        viewEngine: {
            extname: ".hbs",
            layoutsDir: path.join(__dirname, "../views"),
            defaultLayout: false,
        },
        viewPath: path.join(__dirname, "../views"),
        extName: ".hbs"
    }));
};

// Call function to load handlebars
loadHandlebars();

const sendResetPasswordEmail = async (to:string, token:string) =>{
    const mailOptions = {
        from : `"HRM_System Company <No Reply>" ${envConfig.node_mailer.user}`,
        to,
        subject: "Reset Password",
        template: "reset-password",
        context:{
            token,
            email:to 
        },
    }

    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log("Error Send Mail : ",error)
    }
}

export default sendResetPasswordEmail;