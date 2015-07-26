var HttpResponse = require('./HttpResponse');

module.exports = ConflictResponse;

/**
 * Whenever a resource conflict would be caused by fulfilling the request.
 * Duplicate entries, such as trying to create two customers with
 * the same information, and deleting root objects when cascade-delete
 * is not supported are a couple of examples.
 *
 * @param message
 * @param errorCode
 * @param moreInfo
 * @constructor
 */
function ConflictResponse (message, errorCode, moreInfo) {
    HttpResponse.call(
        this, null, message || 'Conflict', 409, errorCode, moreInfo);
}
