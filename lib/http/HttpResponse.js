module.exports = HttpResponse;

/**
 * Create the base HTTP Response object,
 * that prototypally inherits from the Error constructor.
 *
 * @param object    data
 * @param string    message
 * @param integer   httpStatusCode
 * @param mixed     errorCode
 * @param string    moreInfo
 * @param success
 * @constructor
 */
function HttpResponse (data, message, httpStatusCode, errorCode, moreInfo, success) {
    this.constructor.prototype.__proto__ = Error.prototype;
    Error.captureStackTrace(this, this.constructor);
    this.type = this.constructor.name;
    this.message = message ? message + '' : '';
    this.status = parseInt(httpStatusCode, 10);
    this.success = !!success;
    moreInfo && (this.moreInfo = moreInfo);
    errorCode && (this.code = errorCode);
    data && (this.data = data);
}
