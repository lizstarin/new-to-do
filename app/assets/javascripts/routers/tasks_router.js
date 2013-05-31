TD.Routers.TasksRouter = Backbone.Router.extend({

  initialize: function (rootEl, tasks) {
    var that = this;

    that.$rootEl = $(rootEl);
    that.tasks = tasks;
    console.log("INITIALIZING TASKS ROUTER");
  },

  routes: {
    "days/:day_id/tasks": "index"
  },

  index: function () {
    var that = this;
    console.log(that.tasks);

    var tasksIndexView = new TD.Views.DayView({
      collection: that.tasks
      // model: that.day
    });

    that.$rootEl.html(tasksIndexView.render().$el);
  },

  new: function () {

  }

});