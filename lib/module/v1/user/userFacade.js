"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================
// Load user service
var _ = require("lodash");
var Promise = require("bluebird");
var ip = require('ip');
//========================== Load internal modules ====================

const usrService = require('./userService');
const userMapper = require('./userMapper');

const appUtils = require('../../../appUtils');
const redisSession = require("../../../redisClient/session");
const customException = require("../../../customException");
const emailService = require("../../../service/sendgrid_email");
const constant = require("../../../constant");
const config = require("../../../config");

//========================== Load Modules End ==============================================

const userLogin = (params) => {
    return usrService.isEmailExist(params)
        .then(isExist => isExist ? usrService.login(params) : customException.userNotFound())
        .then(response => {
            if (response) {
                const tokenObj = _buildUserTokenGenObj(response);
                const userObj = {
                    userId: response._id.toString(),
                    userObj: tokenObj,
                    ip: params.clientIp ? params.clientIp : ip.address()
                }
                return redisSession.create(userObj)
            } else {
                throw customException.incorrectPass();
            }

        })
        .then(response => userMapper.loginMapping({ user: this.user, accessToken: response.token }));

}
//========================== Export Module Start ==============================

module.exports = {
    userLogin
};

//========================== Export Module End ================================