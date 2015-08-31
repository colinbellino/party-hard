import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    let party = this.get('store').findRecord('party', params.party_id);

    return party;
  }
});
