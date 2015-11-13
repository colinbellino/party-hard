import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['drop-list'],
  filteredDrops: Ember.computed.filterBy('drops', 'isNew', false)
});
