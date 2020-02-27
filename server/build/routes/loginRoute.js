"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send('hi there');
});
router.get('/login', function (req, res) {
    res.send("<form method=\"post\">\n\n    <div class=\"container\">\n      <label for=\"uname\"><b>Username</b></label>\n      <input type=\"text\" placeholder=\"Enter Username\" name=\"uname\" required>\n\n      <label for=\"psw\"><b>Password</b></label>\n      <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\n        \n      <button type=\"submit\">Login</button>\n    </div>\n\n  </form>");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    res.send(email + password);
});
