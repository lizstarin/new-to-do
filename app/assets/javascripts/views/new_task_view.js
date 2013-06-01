TD.Views.NewTaskView = Backbone.View.extend({

  render: function () {
    var that = this;
    console.log(that);

    var taskForm = $("<form action='/days/:day_id/tasks/new' method='post'><input type='text' name='task[name]'><input type='date' name='task[due_date]'><input type='submit' value='ADD TASK'></form>");

    // var renderedContent = JST["tasks/new"]({
    //   task: that.model
    // });
    //
    // that.$el.html(renderedContent);
    that.$el.html(taskForm);
    return that;
  }

});