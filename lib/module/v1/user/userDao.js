"use strict";
//========================== Load Modules Start =======================

//========================== Load internal modules ====================
var mongoose = require("mongoose");
var promise = require("bluebird");

var _ = require("lodash");
//========================== Load internal modules ====================
const userModel = require('./userModel');
const adminModel = require('./adminModel');

// init user dao
let BaseDao = require('../../../dao/baseDao');
const userDao = new BaseDao(userModel);
const adminDao = new BaseDao(adminModel)

//========================== Load Modules End ==============================================

const createUser = (params) => {
    const user = new userModel(params);
    return userDao.save(user);
}

function isEmailExist(params) {
    let query = {};
    if (params.userId) {
        query._id = { $ne: params.userId };
    }
    if (params.email) {
        query.email = params.email;

        return userDao.findOne(query)
            .then(function (result) {
                if (result) {
                    return true;
                }
                else {
                    return false;
                }
            })
    } else {
        return _PromiseFunction;
    }
}

function emailCheck(params) {
    let query = {};
    if (params.userId) {
        query._id = { $ne: params.userId };
    } else {
        if (params.user.userType === 1) {
            if (params.user.userId) {
                query._id = { $ne: params.user.userId };
            }
        }
    }
    if (params.email) {
        query.email = params.email;
        return userDao.findOne(query)
            .then(result => result ? true : false)
    } else {
        return _PromiseFunction;
    }
}

const getAdminByKey = (query) => adminDao.findOne(query);

const createAdminUser = (params) => {
    const user = new adminModel(params);
    return adminDao.save(user);
}

const _PromiseFunction = new Promise((resolve, reject) => {
    resolve(true);
});
//========================== Export Module Start ==============================

module.exports = {
    createUser,
    isEmailExist,
    emailCheck,
    getAdminByKey,
    createAdminUser
};

//========================== Export Module End ===============================
