$(document).ready(function(){
   var full_scrpt = $('<script>');
    full_scrpt.on('load',function(){
       console.log()
        $('#calendar').fullCalendar({
            defaultView: 'month',  // or agendaDay or agendaMonth
            lang: 'ru',
            timeFormat: 'H(:mm)',
            monthNames: ['Январ','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthNamesShort: ['Янв.','Фев.','Март','Апр.','Май','Июнь','Июль','Авг.','Сент.','Окт.','Ноя.','Дек.'],
            dayNames: ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
            dayNamesShort: ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"],
            snapDuration: '01:00:00',
            header: {
                left: 'prev,next today myCustomButton',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            buttonIcons: {  //classes for header buttons
                prev: ' fa fa-arrow-left',
                next: ' fa fa-arrow-right',
                prevYear: 'left-double-arrow',
                nextYear: 'right-double-arrow'
            },
            selectable: true,
            selectHelper: true,
            unselectAuto: false,
        });
    });
    $('body').append(full_scrpt);
    full_scrpt.attr('src','/dist/js/fullcalendar.js');

});