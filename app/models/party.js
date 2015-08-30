import DS from 'ember-data';

var Party = DS.Model.extend({
  name:         DS.attr(),
  description:  DS.attr(),
  type:         DS.attr(),
  isRecruting:  DS.attr('boolean'),

  leader:       DS.belongsTo('character'),
  members:      DS.hasMany('character', { async: true }),
  schedule:     DS.belongsTo('schedule'),
});

Party.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "name": "Party A",
      "leader": 1,
      "members": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      "id": 2,
      "name": "Party B",
      "leader": 13,
      "members": [10, 11, 12, 13, 14, 15, 16, 17, 18],
    },
    {
      "id": 3,
      "name": "Party C",
      "leader": 1,
      "members": [],
    },
  ]
});

export default Party;
