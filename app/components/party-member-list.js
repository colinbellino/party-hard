import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ph-party-member-list'],

  model: function() {
    return Ember.ArrayProxy.extend(Ember.SortableMixin).create({
      sortProperties: ['job.role'],
      sortAscending: false,
      content: this.get('characters'),
    });
  }.property('characters'),
});
