import Ember from 'ember';

export default Ember.Route.extend({
  model() {
   return this.store.query('articles', { orderBy: 'tags', equalTo: 'lifestyle' });
 },actions: {
   close() {
     $('.sidebar').slideUp();
   }
 }
});
