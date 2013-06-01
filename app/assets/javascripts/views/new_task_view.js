TD.Views.NewTaskView = Backbone.View.extend({

  render: function (dayId) {
    console.log("RENDERING NEW TASK VIEW");
    var that = this;

    var url = "/days/" + dayId + "/tasks"
    // var taskForm = $("<form action='/days/:day_id/tasks/new' method='post'><input type='text' name='task[name]'><input type='date' name='task[due_date]'><input type='submit' value='ADD TASK'></form>");

    var taskForm = $("<form action='" + url + "' method='post'><input type='text' name='task[name]'><input type='date' name='task[due_date]'><input type='hidden' name='task[day_id]' value='" + dayId + "'><input type='submit' value='ADD TASK'></form>");

    // var renderedContent = JST["tasks/new"]({
    //   task: that.model
    // });
    //
    // that.$el.html(renderedContent);
    that.$el.html(taskForm);
    return that;
  }

});