import DS from 'ember-data';

export default DS.Model.extend({
  name:         DS.attr(),
  comment:      DS.attr(),

  job:          DS.belongsTo('job'),
});
