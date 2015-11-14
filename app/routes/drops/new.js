import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render({ into: 'application' });
  },
  model: function() {
    let store = this.store;

    return Ember.RSVP.hash({
      allCharacters: store.findAll('character'),
    });
  }
});
