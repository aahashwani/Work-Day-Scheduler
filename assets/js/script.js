$(document).ready(function() {
    var currentTime = moment().format('llll');
    $('#currentDay').text(currentTime);
    setColor()
    getTasks()
})
var currentDay 
var timeBlock = $('.time-block')
var currentHour = moment().hours()
var saveBtn = $('.saveBtn')
var deleteBtn = $(".deleteBtn")


function setColor() {
    timeBlock.each(function() {
        var timeBlockHour = $(this).attr('id');

        if(currentHour > timeBlockHour) {
            $(this).addClass('past')
        }
        else if(currentHour == timeBlockHour) {
            $(this).removeClass('past')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
}

saveBtn.on('click', function(e) { 
    e.preventDefault()
    var id = $(this).attr('id')
    var task = $(this).siblings('.time-block').val()
    localStorage.setItem(id, task)
    getTasks()
})

function getTasks() {
    for(var i = 9; i < 18; i++) {
        var taskHistory = localStorage.getItem(i)
        $('#' + i).text(taskHistory)
    }
}