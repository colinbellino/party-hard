import DS from 'ember-data';
import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

var DropValidations = buildValidations({
  name: validator('presence', true),
  price: [
    validator('presence', true),
    validator('integer'),
    validator('number', {
      integer: true,
      gt: 0,
      lte: 100
    })
  ],
  quantity: [
    validator('presence', true),
    validator('integer'),
    validator('number', {
      integer: true,
      gt: 0,
      lte: 100
    })
  ]
});

var Drop = DS.Model.extend(DropValidations, {
  name: DS.attr('string'),
  quantity: DS.attr('number'),
  price: DS.attr('number'),

  creditors: DS.hasMany('character', { async: true }),

  pricePerPerson: Ember.computed('price', 'creditors.length', function () {
    return Math.round(this.get('price') / this.get('creditors.length'));
  })
});

Drop.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "name": "Full Plate Helmet",
      "price": 10000000,
      "quantity": 1,
      "creditors": [1, 2, 3],
    },
    {
      "id": 2,
      "name": "Enchant Armor (C)",
      "price": 300000,
      "quantity": 8,
      "creditors": [1, 2],
    },
  ]
});

export default Drop;
