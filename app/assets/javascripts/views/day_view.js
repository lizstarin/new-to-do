TD.Views.DayView = Backbone.View.extend({

  events: {
    "click li": "markCompleted",
    "dblclick h2": "makeNewTask"
  },

  render: function () {
    var that = this;
    var tasks = that.model.get("tasks");

    var renderedTaskList = JST["tasks/list"]({
      tasks: tasks
    });

    var dayId = that.model.get("id");
    var newTaskView = new TD.Views.NewTaskView().render(dayId).el;

    that.$el.append(renderedTaskList);
    that.$el.append(newTaskView);

    that.$el.on("dblclick", that.makeNewTask);

    return that;
  },

  markCompleted: function (el) {
    var that = this;

    $(el.target).toggleClass("strikethrough");
    var taskId = el.target.id;
    var task = that.model.get("tasks").get(taskId);
    var completedStatus = !task.get("completed");
    task.save({completed: completedStatus});
  },

  makeNewTask: function (el) {
    $("#newtask").toggle();
  }

});

// TD.Views.NewTaskView = Backbone.View.extend({
//
//   render: function (dayId) {
//     var that = this;
//     var newTask = new TD.Models.Task();
//
//     var renderedContent = JST["tasks/new"]({
//       task: newTask,
//       dayId: dayId
//     });
//
//     that.$el.html(renderedContent);
//     return that;
//   }
//
// });