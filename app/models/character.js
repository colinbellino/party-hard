import DS from 'ember-data';

var Character = DS.Model.extend({
  name:         DS.attr(),
  comment:      DS.attr(),

  job:          DS.belongsTo('job'),
});

Character.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "name": "Aperow"
    },
    {
      "id": 2,
      "name": "duls"
    },
    {
      "id": 3,
      "name": "Eleirah"
    },
    {
      "id": 4,
      "name": "Evo"
    },
    {
      "id": 5,
      "name": "heebhan"
    },
    {
      "id": 6,
      "name": "Hyksos"
    },
    {
      "id": 7,
      "name": "Isaer"
    },
    {
      "id": 8,
      "name": "Jadek"
    },
    {
      "id": 9,
      "name": "Lyzora"
    },
    {
      "id": 10,
      "name": "Maleduin"
    },
    {
      "id": 11,
      "name": "Megae"
    },
    {
      "id": 12,
      "name": "Miloolim"
    },
    {
      "id": 13,
      "name": "RaoHSamA"
    },
    {
      "id": 14,
      "name": "Reborn"
    },
    {
      "id": 15,
      "name": "Thani"
    },
    {
      "id": 16,
      "name": "Bydom"
    },
    {
      "id": 17,
      "name": "Wiz"
    },
    {
      "id": 18,
      "name": "Ysefir"
    },
    {
      "id": 19,
      "name": "Zakun"
    },
    {
      "id": 20,
      "name": "Panzer"
    },
  ]
});

export default Character;
