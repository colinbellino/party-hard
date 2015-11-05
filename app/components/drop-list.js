import Ember from 'ember';

export default Ember.Component.extend({
  filteredDrops: Ember.computed.filterBy('drops', 'isNew', false)
});
