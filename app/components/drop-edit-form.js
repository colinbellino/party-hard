import Ember from 'ember';

export default Ember.Component.extend({

  availableCharacters: Ember.computed('characters', 'drop.deptors', function () {
    return this.get('characters').filter(function (character) {
      return !this.get('drop.deptors').contains(character);
    }.bind(this));
  }),

  initDrop: function () {
    let drop = this.store.createRecord('drop', {
      quantity: 1
    });

    this.set('drop', drop);
  }.on('init'),

  actions: {
    changeCharacter () {
      const characters = this.get('characters');
      const selectElement = this.$('select')[0];
      const selectedValue = selectElement[selectElement.selectedIndex].value;
      const selectedCharacter = characters.findBy('id', selectedValue);

      this.get('drop.deptors').then(function (deptors) {
        deptors.pushObject(selectedCharacter);
      });

      selectElement.selectedIndex = 0;
    },

    save () {
      // TODO: Error check
      this.get('drop').save();
    }
  }
});
