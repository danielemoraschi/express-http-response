var HttpResponse = require('./HttpResponse');

module.exports = InternalServerErrorResponse;

/**
 * Never return this intentionally.
 * The general catch-all error when the server-side throws an exception.
 * Use this only for errors that the consumer cannot address from their end.
 *
 * @param message
 * @param errorCode
 * @param moreInfo
 * @constructor
 */
function InternalServerErrorResponse (message, errorCode, moreInfo) {
    HttpResponse.call(
        this, null, message || 'Internal Server Error', 500, errorCode, moreInfo);
}
