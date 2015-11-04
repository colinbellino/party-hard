import Ember from 'ember';

export default Ember.Component.extend({
  loadGoals: function () {
    let store = this.get('store');

    store.findAll('goal').then(function findGoals (goals) {
      this.set('goals', goals);
    }.bind(this));

  }.on('init')
});
