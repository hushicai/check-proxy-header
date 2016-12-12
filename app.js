

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

router.get('/', function *(next) {
  this.body = this.headers;
});

router.get('/getIp', function *(next) {
  this.body = {
    ip: this.request.ip
  }
});

app.use(router.routes());


app.listen(3000, function () {});
