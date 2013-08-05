var comparator = require('./');
var test = require('tape');

test('comparator', function (t) {
  var asc = comparator();
  t.equal(asc('a', 'b'), -1);
  t.equal(asc('b', 'a'), 1);
  t.equal(asc('a', 'a'), 0);

  var asc = comparator.asc();
  t.equal(asc('a', 'b'), -1);
  t.equal(asc('b', 'a'), 1);
  t.equal(asc('a', 'a'), 0);

  var desc = comparator.desc();
  t.equal(desc('a', 'b'), 1);
  t.equal(desc('b', 'a'), -1);
  t.equal(desc('a', 'a'), 0);

  var asc = comparator('foo');
  var a = { foo: 'a' };
  var b = { foo: 'b' };
  t.equal(asc(a, b), -1);
  t.equal(asc(b, a), 1);
  t.equal(asc(a, a), 0);

  t.end();
});

