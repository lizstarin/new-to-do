TD.Views.DayView = Backbone.View.extend({

  render: function () {
    var that = this;

    var ul = $("<ul id='tasklist'></ul>");

    _.each(that.collection.models, function (task) {
      var name = task.get("name");
      var dueDate = task.get("due_date");
      var id = task.get("id");
      var li = $("<li id='" + id + "'></li>");
      li.append

    })

    return that;
  }

});