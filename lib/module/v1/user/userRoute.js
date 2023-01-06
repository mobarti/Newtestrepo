const router = require("express").Router();
const requestIp = require('request-ip');

const resHndlr = require("../../../responseHandler");
const middleware = require("../../../middleware");
const constants = require("../../../constant");
const userFacade = require("./userFacade");
const validators = require("./userValidators");

const constant = require("../../../constant");
//==============================================================

router.route("/login")
    .post([validators.validateLogin], (req, res) => {
        let { email, password } = req.body;
        let clientIp = requestIp.getClientIp(req);
        userFacade.userLogin({ email, password, clientIp })
            .then((result) => {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch((err) => {
                resHndlr.sendError(res, err, req);
            })
    });

module.exports = router;
