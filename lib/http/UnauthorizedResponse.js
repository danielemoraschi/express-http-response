var HttpResponse = require('./HttpResponse');

module.exports = UnauthorizedResponse;

/**
 * Error code response for missing or invalid authentication token.
 *
 * @param message
 * @param errorCode
 * @param moreInfo
 * @constructor
 */
function UnauthorizedResponse (message, errorCode, moreInfo) {
    HttpResponse.call(
        this, null, message || 'Unauthorized', 401, errorCode, moreInfo);
}
