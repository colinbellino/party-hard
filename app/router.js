import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('parties', function() {});
  this.route('party', { path: 'parties/:party_id' }, function() {
    this.route('edit');
  });
  this.route('goals', function() {});
  this.route('drops', function() {
    this.route('mine');
    this.route('friends');
    this.route('new');
  });
});

export default Router;
