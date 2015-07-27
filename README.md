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

## API

```js
var httpResponse = require('express-http-response');
```

### httpResponse.Middleware()

The middleware parse the thrown response returning to the user with a standard json response, supplied with values for `http status code`, `message`, `success`, `error code`, `more info`, and `json data`.

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
    }

    next(new OkResponse({
        users: { /* ... */ },
        page: 1,
        total: 42
    }));

});

// keep this after all routes that will use the response object
app.use(httpResponse.Middleware);

app.listen(3000);
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
