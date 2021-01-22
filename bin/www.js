
var start_debug = require('debug')
var app = require('../app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  start_debug('server listening on port ' + server.address().port);
});
