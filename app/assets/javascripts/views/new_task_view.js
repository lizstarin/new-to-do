TD.Views.NewTaskView = Backbone.View.extend({

  render: function (dayId) {
    var that = this;
    var newTask = new TD.Models.Task();

    var renderedContent = JST["tasks/new"]({
      task: newTask,
      dayId: dayId
    });

    that.$el.append(renderedContent);
    return that;
  }

});