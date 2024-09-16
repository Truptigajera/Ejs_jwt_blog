const express = require('express');

const {
    showRegisterPage,
    registerUser,
    showLoginPage,
    loginUser,
    
} = require('../controller/user.controller');

const {
    showverifyotppage,
    generateotp,
    verifyotp,
    forgotpasswordPage,
    resetPasswordPage,
    resetPassword
} = require('../controller/forgotpassword')
const userRoutes = express.Router();
const {verifyToken} = require('../middleware/auth');

userRoutes.get("/register", showRegisterPage);
userRoutes.post("/register", registerUser);

userRoutes.get("/login", showLoginPage);
userRoutes.post("/login", loginUser);

// otp routes
userRoutes.get("/verifyOTP", showverifyotppage);
userRoutes.post("/genrateotp" , generateotp );
userRoutes.post("/verifyotp" , verifyotp );

//forgotpassword
userRoutes.get('/forgotpassword',forgotpasswordPage)
userRoutes.get('/resetpasswordpage',resetPasswordPage)
userRoutes.post('/resetpassword' , resetPassword)


module.exports = userRoutes;