import Ember from 'ember';
import DS from 'ember-data';

var Job = DS.Model.extend({
  name: DS.attr(),
  default_role: DS.attr(),

  // TODO: use only the role property
  role: Ember.computed('default_role', function() {
    return this.get('default_role');
  }),
});

Job.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "name": "Warlord",
      "default_role": "damage_dealer",
    },
    {
      "id": 2,
      "name": "Gladiator",
      "default_role": "damage_dealer",
    },
    {
      "id": 3,
      "name": "Paladin",
      "default_role": "tank",
    },
    {
      "id": 4,
      "name": "Dark Avenger",
      "default_role": "tank",
    },
    {
      "id": 5,
      "name": "Treasure Hunter",
      "default_role": "damage_dealer",
    },
    {
      "id": 6,
      "name": "Hawkeye",
      "default_role": "damage_dealer",
    },
    {
      "id": 7,
      "name": "Sorcerer",
      "default_role": "damage_dealer",
    },
    {
      "id": 8,
      "name": "Necromancer",
      "default_role": "damage_dealer",
    },
    {
      "id": 9,
      "name": "Warlock",
      "default_role": "damage_dealer",
    },
    {
      "id": 10,
      "name": "Bishop",
      "default_role": "support",
    },
    {
      "id": 11,
      "name": "Prophet",
      "default_role": "support",
    },
    {
      "id": 12,
      "name": "Temple Knight",
      "default_role": "tank",
    },
    {
      "id": 13,
      "name": "Sword Singer",
      "default_role": "support",
    },
    {
      "id": 14,
      "name": "Plainswalker",
      "default_role": "damage_dealer",
    },
    {
      "id": 15,
      "name": "Silver Ranger",
      "default_role": "damage_dealer",
    },
    {
      "id": 16,
      "name": "Spellsinger",
      "default_role": "damage_dealer",
    },
    {
      "id": 17,
      "name": "Elemental Summoner",
      "default_role": "damage_dealer",
    },
    {
      "id": 18,
      "name": "Elven Elder",
      "default_role": "support",
    },
    {
      "id": 19,
      "name": "Shilien Knight",
      "default_role": "tank",
    },
    {
      "id": 20,
      "name": "Blade Dancer",
      "default_role": "support",
    },
    {
      "id": 21,
      "name": "Abyss Walker",
      "default_role": "damage_dealer",
    },
    {
      "id": 22,
      "name": "Phantom Ranger",
      "default_role": "damage_dealer",
    },
    {
      "id": 23,
      "name": "Spellhowler",
      "default_role": "damage_dealer",
    },
    {
      "id": 24,
      "name": "Phantom Summoner",
      "default_role": "damage_dealer",
    },
    {
      "id": 25,
      "name": "Shilien Elser",
      "default_role": "support",
    },
    {
      "id": 26,
      "name": "Destroyer",
      "default_role": "damage_dealer",
    },
    {
      "id": 27,
      "name": "Tyrant",
      "default_role": "damage_dealer",
    },
    {
      "id": 28,
      "name": "Overlord",
      "default_role": "support",
    },
    {
      "id": 29,
      "name": "Warcryer",
      "default_role": "support",
    },
    {
      "id": 30,
      "name": "Bounty Hunter",
      "default_role": "damage_dealer",
    },
    {
      "id": 31,
      "name": "Artisan",
      "default_role": "damage_dealer",
    },

  ]
});

export default Job;
