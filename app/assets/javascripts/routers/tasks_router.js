TD.Routers.TasksRouter = Backbone.Router.extend({

  initialize: function (rootEl, tasks) {
    var that = this;

    that.$rootEl = $(rootEl);
    that.tasks = tasks;
  },

  routes: {
    "": "index",
    "/new": "new"
  },

  index: function () {
    var that = this;

    var tasksIndexView = new TD.Views.DayView({
      model: day
    });
  },

  new: function () {

  }

});