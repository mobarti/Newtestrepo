const multer = require('./multer');
const authenticate = require('./authenticate');
const basicAuth = require('./basicAuth');
const mediaUpload = require('./mediaUpload');
const authenticateRole = require('./authenticateRole');

// ========================== Export Module Start ==========================
module.exports = {
        multer,
        authenticate,
        basicAuth,
        mediaUpload,
        authenticateRole
}
// ========================== Export Module End ============================