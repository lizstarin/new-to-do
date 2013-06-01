TD.Views.DayView = Backbone.View.extend({

  // events: {
  //   "dblclick .day": "makeNewTask",
  //   "click .task": "markCompleted"
  // },

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

    $()

    return that;
  },

  // makeNewTask: function () {
  //   $("#newtask").toggle();
  // },

  // markCompleted: function () {
  //   task.set(completed: true);
  //   $("li").addClass("strikethrough");
  // }

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