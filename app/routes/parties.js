import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let parties = this.get('store').findAll('party');

    return parties;
  }
});
