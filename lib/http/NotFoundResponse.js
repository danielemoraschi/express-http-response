var HttpResponse = require('./HttpResponse');

module.exports = NotFoundResponse;

/**
 * Used when the requested resource is not found, whether it doesn't exist or
 * if there was a 401 or 403 that, for security reasons,
 * the service wants to mask.
 *
 * @param message
 * @param errorCode
 * @param moreInfo
 * @constructor
 */
function NotFoundResponse (message, errorCode, moreInfo) {
    HttpResponse.call(
        this, null, message || 'Not Found', 404, errorCode, moreInfo);
}
