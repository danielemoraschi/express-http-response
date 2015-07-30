var HttpResponses = require('../lib/index');
var Middleware = require('../lib/index').Middleware;
var util = require('util');
var assert = require('assert');

var responses = [
    'HttpResponse',
    'OkResponse',
    // no data responses
    'BadRequestResponse',
    'UnauthorizedResponse',
    'ForbiddenResponse',
    'NotFoundResponse',
    'MethodNotAllowedResponse',
    'ConflictResponse',
    'InternalServerErrorResponse'
];

var statuses = {
    'HttpResponse': {
        status: false
    },
    'OkResponse': {
        status: 200
    },
    'BadRequestResponse': {
        status: 400
    },
    'UnauthorizedResponse': {
        status: 401
    },
    'ForbiddenResponse': {
        status: 403
    },
    'NotFoundResponse': {
        status: 404
    },
    'MethodNotAllowedResponse': {
        status: 405
    },
    'ConflictResponse': {
        status: 409
    },
    'InternalServerErrorResponse': {
        status: 500
    },
};

describe('Http Responses', function() {

    describe('All', function() {

        it('should return function', function() {
            for (var i = 0; i < responses.length; i++) {
                var name = responses[i];
                console.info('checking ' + name);
                HttpResponses[name].should.be.a('function');
            }
        });

        it('should be instance of Error', function() {
            for (var i = 0; i < responses.length; i++) {
                var name = responses[i];
                console.info('checking ' + name + ' instance of Error');
                var response = new HttpResponses[name]();
                assert.equal(response instanceof Error, true);
            }
        });

        it('should be instance of <HttpResponse>', function() {
            for (var i = 0; i < responses.length; i++) {
                var name = responses[i];
                console.info('checking ' + name + ' instance of ' + name);
                var response = new HttpResponses[name]();
                assert.equal(response instanceof HttpResponses[name], true);
            }
        });


        it('status code should be defined', function() {
            for (var i = 0; i < responses.length; i++) {
                var name = responses[i];
                console.info('checking ' + name + 'status ' + statuses[name].status);
                var response = new HttpResponses[name]();
                if (statuses[name].status) {
                    assert.equal(response.status, statuses[name].status);
                }
            }
        });


        // no data responses
        it('should contain message "test message"', function() {
            for (var i = 2; i < responses.length; i++) {
                var name = responses[i];
                console.info('checking ' + name + ' instance of ' + name);
                var response = new HttpResponses[name]("test message");
                assert.equal(response.message, "test message");
            }
        });

    });

    describe('OkResponses', function() {

        it('should contain data "{}"', function() {
            var response = new HttpResponses.OkResponse({value: 3});
            assert.equal(typeof response.data, "object");
            assert.equal(response.data.value, 3);
        });

    });

    describe('HttpResponseMiddleware', function() {

        it('should match the expected result', function() {
            var name, req, res, next, response;
            for (var i = 0; i < responses.length; i++) {

                name = responses[i];
                req = {};
                res = {
                    status: function (status) {
                        this.status = status;
                        var self = this;
                        return {
                            send: function (response) {
                                self.response = response;
                            }
                        }
                    }
                };
                next = function () {};

                console.info('checking ' + name);
                response = new HttpResponses[name]();

                Middleware(response, req, res, next);

                assert.equal(res.response, response);

                if (statuses[name].status) {
                    assert.equal(res.status, response.status);
                    assert.equal(res.status, statuses[name].status);
                }
            }
        });

    });

});
