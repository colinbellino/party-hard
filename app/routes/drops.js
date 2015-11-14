import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let store = this.store;

    return Ember.RSVP.hash({
      userDrops: store.findAll('drop'), // TODO: use real queries to the server
      friendsDrops: store.findAll('drop'), // TODO: use real queries to the server
    });
  }
});
