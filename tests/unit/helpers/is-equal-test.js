import { isEqual } from '../../../helpers/is-equal';
import { module, test } from 'qunit';

module('Unit | Helper | is equal');

test('it return true with two identical values', function(assert) {
  var result = isEqual(42, 42);
  assert.ok(result);
});

test('it return true with two different values', function(assert) {
  var result = isEqual(42, '42');
  assert.ko(result);
});
