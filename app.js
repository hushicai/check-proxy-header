

var koa = require('koa');
var views = require('koa-views');
var app = koa();

app.use(
  views(__dirname + '/views', {
    map: {
      html: 'underscore'
    }
  })
);

app.use(function *() {
  var headers = this.headers;

  yield this.render('index', {
    headers: headers
  })
});


app.listen(3000);
