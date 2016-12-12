

var koa = require('koa');
var views = require('koa-views');

var app = koa();

app.proxy = true;

app.use(
  views(__dirname + '/views', {
    map: {
      html: 'underscore'
    }
  })
);

var router = require('koa-router')();

router.get('/getAnonymity', function *(next) {
  var extend = require('util')._extend;
  var d = extend({ip: this.request.ip}, this.headers)

  this.body = d;
});

router.get('/getIp', function *(next) {
  this.body = {
    ip: this.request.ip
  }
});

app.use(router.routes());


app.listen(8825, '0.0.0.0', function () {});
