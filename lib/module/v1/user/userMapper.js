/**
 * This file will have request and response object mappings.
 */
var _ = require("lodash");
const contstants = require("../../../constant");
const config = require('../../../config');

const loginMapping = (params) => {
    return {
        message: "Successfully Login",
        accessToken: params.accessToken,
        mediaPath: config.cfg.s3.mediaPath,
        data: params.result,
    }
}

module.exports = {
    loginMapping
}