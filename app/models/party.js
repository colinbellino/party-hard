import DS from 'ember-data';

export default DS.Model.extend({
  name:         DS.attr(),
  description:  DS.attr(),
  type:         DS.attr(),
  isRecruting:  DS.attr('boolean'),

  members:      DS.hasMany('character'),
  schedule:     DS.belongsTo('schedule'),
});
