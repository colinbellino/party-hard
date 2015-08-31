import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  // Add empty members until the party member limit is reached
  initPartyMembers: function() {
    let members = this.get('party.members');

    for (var i = members.get('length'); i < config.APP.PARTY_MAX_SLOT; i++) {
      let character = this.get('store').createRecord('character');
      members.addObject(character);
    }
  }.on('init'),
});
