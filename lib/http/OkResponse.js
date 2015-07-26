var HttpResponse = require('./HttpResponse');

module.exports = OkResponse;

/**
 * The request has succeeded. The information returned with the
 * response is dependent on the method used in the request, for example:
 *
 * GET an entity corresponding to the requested resource is sent in the response;
 * HEAD the entity-header fields corresponding to the
 * requested resource are sent in the response without any message-body;
 * POST an entity describing or containing the result of the action;
 * TRACE an entity containing the request message as received by the end server.
 *
 * @param message
 * @param errorCode
 * @param moreInfo
 * @constructor
 */
function OkResponse (data, message, moreInfo) {
    HttpResponse.call(
        this, data, message || 'OK', 200, undefined, moreInfo, true);
}
