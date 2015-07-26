var HttpResponse = require('./HttpResponse');

module.exports = BadRequestResponse;

/**
 * The request could not be understood by the server due to malformed syntax.
 * The client SHOULD NOT repeat the request without modifications.
 *
 * @param message
 * @param errorCode
 * @param moreInfo
 * @constructor
 */
function BadRequestResponse (message, errorCode, moreInfo) {
    HttpResponse.call(
        this, null, message || 'Bad Request', 400, errorCode, moreInfo);
}
