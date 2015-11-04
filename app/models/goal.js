import DS from 'ember-data';
import Ember from 'ember';

var Goal = DS.Model.extend({
  name: DS.attr('string'),
  steps: DS.attr(),

  progress: Ember.computed('steps[]',function () {
    let steps = this.get('steps');
    let progress = 0;

    steps.forEach(function (step) {
      let stepProgress = step.current / step.total * 100;
      progress += stepProgress;
    });

    progress /= steps.length;

    return progress;
  })
});

Goal.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "name": "Clan Level Up (1)",
      "steps": [
        { "name": "Adena", "current": 30, "total": 100 },
      ]
    },
    {
      "id": 2,
      "name": "Clan Level Up (2)",
      "steps": [
        { "name": "Adena", "current": 0, "total": 100000 },
      ]
    },
    {
      "id": 3,
      "name": "Clan Level Up (3)",
      "steps": [
        { "name": "Adena", "current": 20000, "total": 100000 },
        { "name": "Blood Thingy", "current": 10, "total": 100 },
      ]
    },
    {
      "id": 4,
      "name": "Clan Hall",
      "steps": [
        { "name": "Adena", "current": 0, "total": 100000 },
      ]
    },
  ]
});

export default Goal;
