exports.name = 'loog';

exports.data = 'this is some data';

var privateVariable = 5;

exports.getPrivate = function () {
  return privateVariable;
}
