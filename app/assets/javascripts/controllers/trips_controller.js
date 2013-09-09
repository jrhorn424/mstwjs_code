TimeTravel.TripsController = Ember.ArrayController.extend({
  itemController: "indexTrip",
  sortProperties: ['totalRevenue'],
  sortAscending: false,

  overallRevenue: function() {
    return this.get('content').reduce(function(runningTotal, item) {
      return runningTotal + item.get('totalRevenue');
    }, 0);
  }.property("content.@each.totalRevenue"),

  overallRevenueDisplay: function() {
    return accounting.formatMoney(this.get('overallRevenue'));
  }.property("overallRevenue")
});