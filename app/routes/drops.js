import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let store = this.store;

    return Ember.RSVP.hash({
      drops: store.findAll('drop'),
      characters: store.findAll('character'),
    });
  }
});
