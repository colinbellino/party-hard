import Ember from 'ember';

export default Ember.Component.extend({
  model: function() {
    return Ember.ArrayProxy.extend(Ember.SortableMixin).create({
      sortProperties: ['id'],
      sortAscending: true,
      content: this.get('parties'),
    });
  }.property('parties'),
});
