"use strict";

//========================== Load Modules Start =======================
const appUtils = require("../../../appUtils");
//========================== Load internal modules ====================
const userDao = require('./userDao');

//========================== Load Modules End ==============================================

const login = (params) => {
    let query = {};
    query.email = params.email;
    query.password = appUtils.createHashSHA256(params.password);
    return userDao.getByKey(query)
        .then((result) => {
            if (result) {
                return result;
            } else {
                return false;
            }
        })
}

const createAdmin = (params) => {
    return userDao.getAdminByKey({ email: params.email })
        .then(result => result ? result : userDao.createAdminUser(params))
}

const isEmailExist = (params) => userDao.isEmailExist(params);
//========================== Export Module Start ==============================

module.exports = {
    login,
    isEmailExist,
    createAdmin
};

//========================== Export Module End ===============================
