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
                                  // Advance tasks function
  var advanceTask = function(task) {
    var modified = task.innerText.trim()
    for (var i = 0; i < listo.length; i++) {
      if (listo[i].task === modified) {
        if (listo[i].id === 'new') {
          listo[i].id = 'inProgress';
        } else if (listo[i].id === 'inProgress') {
          listo[i].id = 'archived';
        } else {
          listo.splice(i, 1);
        }
        break;
      }
    }
    task.remove();
  };

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
                                  // changing task status to in-prgress
    $(document).on('click', '#item', function(e) {
          e.preventDefault();
          var task = this;
          advanceTask(task);
          this.id = 'inProgress';
          $('#currentList').append(this.outerHTML);
      });
                                  // changing tasks to completed
      $(document).on('click', '#inProgress', function (e) {
        e.preventDefault();
        var task = this;
        task.id = "archived";
        var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
        advanceTask(task);
        $('#archivedList').append(changeIcon);
      });
                                  // changing tasks to archived
      $(document).on('click', '#archived', function (e) {
        e.preventDefault();
        var task = this;
        advanceTask(task);
      });
});
