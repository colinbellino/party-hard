import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ph-party-member-item-edit'],
  classNameBindings: ['showDropZone:drop-zone-is-visible'],

  actions: {
    move: function(member) {
      this.sendAction('moveMember', member, this.get('index'));
    },
    dragMemberOver: function() {
      this.set('showDropZone', true);
    },
    dragMemberOut: function() {
      this.set('showDropZone', false);
    },
  }

});
