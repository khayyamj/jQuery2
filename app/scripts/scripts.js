$(document).ready(function() {

  var listo = [];                 // where to store list
  var Task = function(task) {     // constructor function for each task
    this.task = task;
    this.id = 'new';
  }

    $('#newTaskForm').hide();     // hide form on loading

  var addTask = function(task) {  // adding task to list
    if (task) {
      task = new Task(task);
      listo.push(task);

      $('#newItemInput').val('');
      $('newList').append(
            '<a href="#finish" class="" id="item">' +
            '<li class="list-group-item">' +
            '<h3>' + task.task + '</h3>'+
            '<span class="arrow pull-right">' +
            '<i class="glyphicon glyphicon-arrow-right">' +
            '</span>' +
            '</li>' +
            '</a>'
        );
    }
  }

    $('#newTaskForm').slideToggle('fast', 'linear');

    $('#saveNewItem').on('click', function (e) {
        e.preventDefault();
        var task = $('#newItemInput').val().trim();
        addTask(task);
    });

                                  //Opens form
    $('#add-todo').on('click', function () {
          $('#newTaskForm').fadeToggle('fast', 'linear');
      });
                                  //closes form
    $('#cancel').on('click', function (e) {
          e.preventDefault();
          $('#newTaskForm').fadeToggle('fast', 'linear');
      });

});
