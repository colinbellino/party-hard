import DS from 'ember-data';
import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

var DropValidations = buildValidations({
  name: validator('presence', true),
  price: [
    validator('presence', true),
    validator('number', {
      integer: true,
      gt: 0,
      lte: 100
    })
  ],
  quantity: [
    validator('presence', true),
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

  deptors: DS.hasMany('character'),

  pricePerPerson: Ember.computed('price', 'deptors.length', function () {
    let numberOfDeptors = this.get('deptors.length');

    if (numberOfDeptors > 0) {
      return Math.round(this.get('price') / numberOfDeptors);
    }

    return 0;
  })
});

export default Drop;
