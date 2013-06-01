TD.Routers.TasksRouter = Backbone.Router.extend({

  initialize: function (rootEl, tasks) {
    var that = this;

    that.$rootEl = $(rootEl);
    that.tasks = tasks;
  },

  routes: {
    "days/:day_id/tasks": "index",
    "days/:day_id/tasks/new": "new"
  },

  index: function () {
    var that = this;
    console.log(that.tasks);

    var tasksIndexView = new TD.Views.DayView({
      collection: that.tasks
    });

    that.$rootEl.html(tasksIndexView.render().$el);
  },

  new: function () {

  }

});