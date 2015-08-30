import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  didInsertElement: function() {
    this.set('parties', this.get('store').findAll('party'));
  }
});
