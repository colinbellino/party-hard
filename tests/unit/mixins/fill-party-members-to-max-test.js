import Ember from 'ember';
import FillPartyMembersToMaxMixin from '../../../mixins/fill-party-members-to-max';
import { module, test } from 'qunit';

module('Unit | Mixin | fill party members to max');

// Replace this with your real tests.
test('it works', function(assert) {
  var FillPartyMembersToMaxObject = Ember.Object.extend(FillPartyMembersToMaxMixin);
  var subject = FillPartyMembersToMaxObject.create();
  assert.ok(subject);
});
