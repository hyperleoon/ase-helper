const CryptoJS = require('crypto-js');

// AES 加密
function encrypt(message, secretKey) {
    return CryptoJS.AES.encrypt(message, secretKey).toString();
}

// AES 解密
function decrypt(encryptedMessage, secretKey) {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

module.exports = { encrypt, decrypt };