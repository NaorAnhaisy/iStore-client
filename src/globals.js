var passwordValidator = require("password-validator");
export const schema = new passwordValidator();
schema.is().min(8).has().uppercase(1).has().lowercase(1).has().digits(1);

export const serverApiUrl = process.env.NODE_ENV === "production" ? "https://istore.co.il/server" : "http://localhost:5000/server";
export const clientUrl = process.env.NODE_ENV === "production" ? "https://istore.co.il" : "http://localhost:3000";