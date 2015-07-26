var HttpResponse = require('./HttpResponse');

module.exports = ForbiddenResponse;

/**
 * Error code for user not authorized to perform the operation or
 * the resource is unavailable for some reason (e.g. time constraints, etc.).
 *
 * @param message
 * @param errorCode
 * @param moreInfo
 * @constructor
 */
function ForbiddenResponse (message, errorCode, moreInfo) {
    HttpResponse.call(
        this, null, message || 'Forbidden', 403, errorCode, moreInfo);
}
