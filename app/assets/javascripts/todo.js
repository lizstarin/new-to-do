window.TD = {

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function (rootEl, daysData) {
    var days = new TD.Collections.Days(daysData);
    new TD.Routers.DaysRouter(rootEl, days);

    Backbone.history.start();
  }

};