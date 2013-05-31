TD.Views.DayView = Backbone.View.extend({

  initialize: function () {
    var that = this;
    console.log("INITIALIZING DAY VIEW");
    var dayId = that.model.get("id");
  },

  render: function () {
    var that = this;

    console.log("RENDERING DAY VIEW");

    var tasks = that.model.get("tasks");
    var ul = $("<ul id='tasklist'></ul>");

    _.each(tasks.models, function (task) {
      console.log("IN TASK RENDER LOOP");
      var name = task.get("name");
      var dueDate = task.get("due_date");
      var id = task.get("id");
      var li = $("<li id='" + id + "'></li>");
      li.append(name + ", due " + dueDate);
      ul.append(li);
    });

    that.$el.append(ul);
    return that;
  }

});