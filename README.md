# express-http-response

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![MIT License][license-image]][license-url]

> Node.js http response middleware to provide a standard response output.

## Install

```bash
npm install --save http-response-middleware
```

## Example

```js
// # app.js
var express = require('express');
var httpResponse = require('express-http-response');

var BadRequestResponse = httpResponse.BadRequestResponse;
var OkResponse = httpResponse.OkResponse;
var app = express();

app.get('/users', function(req, res, next) {

    if (req.missing_parameter) {
        throw new BadRequestResponse('Missing required parameter.');
        /**
        which will return:
        Header status code: 400
        {
            type: "BadRequestResponse",
            message: "Missing required parameter.",
            status: 400,
            success: false
        }
        logging to console.error
        */
    }

    next(new OkResponse({
        users: { /* ... */ },
        page: 1,
        total: 42
    }));

    /**
    which will return:
    Header status code: 200
    {
        type: "OkResponse",
        message: "OK",
        status: 200,
        success: true,
        data: {
            users: { },
            page: 1,
            total: 42
        }
    }
    */

});

// keep this after all routes that will use the response object
app.use(httpResponse.Middleware);

app.listen(3000);
```

## API

### `Middleware`

The middleware will parse the thrown response returning to the user with a standard json response.

```js
var httpResponse = require('express-http-response');
var express = require('express');
var app = express();

/** [app routes] */

app.use(httpResponse.Middleware);
```

### `HttpResponse`

```js
var HttpResponse = require('express-http-response').HttpResponse;

var response = new HttpResponse (data, message, httpStatusCode, errorCode, moreInfo, success);

/*
response == {
    type: "HttpResponse",     // String
    data: `data`,             // Mixed/Object | not present if undefined
    message: `message`,       // String
    status: `httpStatusCode`, // Int
    code: `errorCode`,        // Mixed/Object | not present if undefined
    moreInfo: `moreInfo`,     // Mixed/Object | not present if undefined
    success: `success`        // Boolean, false by default
}
*/
```

### `OkResponse`

```js
var OkResponse = require('express-http-response').OkResponse;

var response = new OkResponse (data, message, moreInfo);

/*
response == {
    type: "OkResponse",       // String
    data: `data`,             // Mixed/Object | not present if undefined
    message: `message`,       // String
    status: 200,              // Int
    moreInfo: `moreInfo`,     // Mixed/Object | not present if undefined
    success: true             // Boolean
}
*/
```

### `BadRequestResponse`

```js
var BadRequestResponse = require('express-http-response').BadRequestResponse;

var response = new BadRequestResponse (message, errorCode, moreInfo);

/*
response == {
    type: "BadRequestResponse", // String
    message: `message`,       // String
    status: 400,              // Int
    moreInfo: `moreInfo`,     // Mixed/Object | not present if undefined
    success: false            // Boolean
}
*/
```

### `UnauthorizedResponse`

```js
var UnauthorizedResponse = require('express-http-response').UnauthorizedResponse;

var response = new UnauthorizedResponse (message, errorCode, moreInfo);

/*
response == {
    type: "UnauthorizedResponse", // String
    message: `message`,       // String
    status: 401,              // Int
    moreInfo: `moreInfo`,     // Mixed/Object | not present if undefined
    success: false            // Boolean
}
*/
```

### `ForbiddenResponse`

```js
var ForbiddenResponse = require('express-http-response').ForbiddenResponse;

var response = new ForbiddenResponse (message, errorCode, moreInfo);

/*
response == {
    type: "ForbiddenResponse", // String
    message: `message`,       // String
    status: 403,              // Int
    moreInfo: `moreInfo`,     // Mixed/Object | not present if undefined
    success: false            // Boolean
}
*/
```

### `NotFoundResponse`

```js
var NotFoundResponse = require('express-http-response').NotFoundResponse;

var response = new NotFoundResponse (message, errorCode, moreInfo);

/*
response == {
    type: "NotFoundResponse", // String
    message: `message`,       // String
    status: 404,              // Int
    moreInfo: `moreInfo`,     // Mixed/Object | not present if undefined
    success: false            // Boolean
}
*/
```

### `MethodNotAllowedResponse`

```js
var MethodNotAllowedResponse = require('express-http-response').MethodNotAllowedResponse;

var response = new MethodNotAllowedResponse (message, errorCode, moreInfo);

/*
response == {
    type: "MethodNotAllowedResponse", // String
    message: `message`,       // String
    status: 405,              // Int
    moreInfo: `moreInfo`,     // Mixed/Object | not present if undefined
    success: false            // Boolean
}
*/
```

### `ConflictResponse`

```js
var ConflictResponse = require('express-http-response').ConflictResponse;

var response = new ConflictResponse (message, errorCode, moreInfo);

/*
response == {
    type: "ConflictResponse", // String
    message: `message`,       // String
    status: 409,              // Int
    moreInfo: `moreInfo`,     // Mixed/Object | not present if undefined
    success: false            // Boolean
}
*/
```

### `InternalServerErrorResponse`

```js
var InternalServerErrorResponse = require('express-http-response').InternalServerErrorResponse;

var response = new InternalServerErrorResponse (message, errorCode, moreInfo);

/*
response == {
    type: "InternalServerErrorResponse", // String
    message: `message`,       // String
    status: 500,              // Int
    moreInfo: `moreInfo`,     // Mixed/Object | not present if undefined
    success: false            // Boolean
}
*/
```

## License

[MIT][license-url]

[npm-image]: https://img.shields.io/npm/v/express-http-response.svg?style=flat
[npm-url]: https://npmjs.org/package/express-http-response
[travis-image]: https://img.shields.io/travis/danielemoraschi/express-http-response.svg?style=flat
[travis-url]: https://travis-ci.org/danielemoraschi/express-http-response
[coveralls-image]: https://img.shields.io/coveralls/danielemoraschi/express-http-response.svg?style=flat
[coveralls-url]: https://coveralls.io/r/danielemoraschi/express-http-response?branch=master
[downloads-image]: http://img.shields.io/npm/dm/express-http-response.svg?style=flat
[downloads-url]: https://npmjs.org/package/express-http-response
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
