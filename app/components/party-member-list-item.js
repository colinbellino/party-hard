import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['ph-party-member-list-item'],
  classNameBindings: ['isLeader'],

  isLeader: Ember.computed('leader', 'character', function() {
    return this.get('leader') ===   this.get('character');
  })
});
