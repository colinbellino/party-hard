import DS from 'ember-data';

var Character = DS.Model.extend({
  name:         DS.attr("string"),
  comment:      DS.attr("string"),

  job:          DS.belongsTo('job', { async: true }),
});

Character.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "name": "Aperow",
      "job": 14,
    },
    {
      "id": 2,
      "name": "duls",
      "job": 5,
    },
    {
      "id": 3,
      "name": "Eleirah",
      "job": 5,
    },
    {
      "id": 4,
      "name": "Evo",
      "job": 5,
    },
    {
      "id": 5,
      "name": "heebhan",
      "job": 10,
    },
    {
      "id": 6,
      "name": "Hyksos",
      "job": 10,
    },
    {
      "id": 7,
      "name": "Isaer",
      "job": 10,
    },
    {
      "id": 8,
      "name": "Jadek",
      "job": 10,
    },
    {
      "id": 9,
      "name": "Lyzora",
      "job": 10,
    },
    {
      "id": 10,
      "name": "Maleduin",
      "job": 10,
    },
    {
      "id": 11,
      "name": "Megae",
      "job": 11,
    },
    {
      "id": 12,
      "name": "Miloolim",
      "job": 12,
    },
    {
      "id": 13,
      "name": "RaoHSamA",
      "job": 13,
    },
    {
      "id": 14,
      "name": "Reborn",
      "job": 14,
    },
    {
      "id": 15,
      "name": "Thani",
      "job": 15,
    },
    {
      "id": 16,
      "name": "Bydom",
      "job": 16,
    },
    {
      "id": 17,
      "name": "Wiz",
      "job": 17,
    },
    {
      "id": 18,
      "name": "Ysefir",
      "job": 18,
    },
    {
      "id": 19,
      "name": "Zakun",
      "job": 19,
    },
    {
      "id": 20,
      "name": "Panzer",
      "job": 20,
    },
  ]
});

export default Character;
