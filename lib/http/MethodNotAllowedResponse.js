var HttpResponse = require('./HttpResponse');

module.exports = MethodNotAllowedResponse;

/**
 * Used to indicate that the requested URL exists, but the requested
 * HTTP method is not applicable.
 * For example, POST /users/12345 where the API doesn't support creation of
 * resources this way (with a provided ID).
 * The Allow HTTP header must be set when returning a 405 to indicate
 * the HTTP methods that are supported. In the previous case,
 * the header would look like "Allow: GET, PUT, DELETE"
 *
 * @param message
 * @param errorCode
 * @param moreInfo
 * @constructor
 */
function MethodNotAllowedResponse (message, errorCode, moreInfo) {
    HttpResponse.call(
        this, null, message || 'Method Not Allowed', 405, errorCode, moreInfo);
}
