TD.Routers.DaysRouter = Backbone.Router.extend({

  initialize: function (rootEl, days) {
    var that = this;

    that.$rootEl = $(rootEl),
    that.days = days;
  },

  routes: {
    "": "index"
  },

  index: function () {
    var that = this;

    var indexView = new TD.Views.IndexView({
      collection: that.days
    });

    that.$rootEl.html(indexView.render().$el);
  }

});