function jsonMerge(json1, json2){
    var out = {};
    for(var k1 in json1){
        if (json1.hasOwnProperty(k1)) out[k1] = json1[k1];
    }
    for(var k2 in json2){
        if (json2.hasOwnProperty(k2)) {
            if(
                (typeof out[k2] === 'object') && (out[k2].constructor === Object) &&
                (typeof json2[k2] === 'object') && (json2[k2].constructor === Object)
            ) {out[k2] = jsonMerge(out[k2], json2[k2])}
            else{
                out[k2] = json2[k2];
            }
        }
    }
    return out;
}

function loger(){
    for(i in arguments){
        console.log(arguments[i]);
    }
}

$(document).ready(function(){
   var full_scrpt = $('<script>');
    full_scrpt.on('load',function(){
        var agenda_day = {
            defaultView: 'agendaDay',
        };
        var calendarOptions = {
            defaultView: 'month',  // or agendaDay or agendaMonth
            lang: 'ru',
            slotLabelFormat: 'H:mm',
            minTime:'8:00:00',
            maxTime:'22:00:00',
            firstDay:1,
            nowIndicator:true,
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
        };

        var  calendarOptions = jsonMerge(calendarOptions,agenda_day);


        $('#calendar').fullCalendar(calendarOptions);
    });
    $('body').append(full_scrpt);
    full_scrpt.attr('src','/dist/js/fullcalendar.js');
});