import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ph-party-member-list-item'],
  classNameBindings: ['isLeader', 'character.job.role'],

  isLeader: Ember.computed('leader', 'character', function() {
    return this.get('leader') ===   this.get('character');
  })
});
