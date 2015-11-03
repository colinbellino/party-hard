import Ember from 'ember';
import FillPartyMembersToMax from '../mixins/fill-party-members-to-max';

export default Ember.Component.extend(FillPartyMembersToMax, {
  moveMember: (member, position) => {
    console.log('moveMember', member, position);
  },
});
