$(document).ready(function() {

    //button click events 10 key - need update clickPostData
//button click - operators- need update clickPostData
    $('#post-sum').on('click', sumAjax);
    $('#post-diff').on('click', subAjax);
    $('#post-multi').on('click', multiAjax);
    $('#post-div').on('click', divAjax);
//button click - equals and clear- need update clickPostData
    $('#get-equals').on('click', clickPostData);
    $('#get-clear').on('click', clickPostData);

});



function multiAjax() {
    event.preventDefault();
    var values = {};

    $.each($('#post-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });
    //console.log(values);
    //console.log(nameArray);

    $('#post-name').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/data/multi',
        data: values,

        success: function(data) {
            //console.log('From Server: ', data);
            console.log(data);
            $('#answer').append('<div class="answer">' + data + '</div>');

        }

    });
}

function divAjax() {
    event.preventDefault();
    var values = {};

    $.each($('#post-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });
    //console.log(values);
    //console.log(nameArray);

    $('#post-name').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/data/div',
        data: values,

        success: function(data) {
            //console.log('From Server: ', data);
            console.log(data);
            $('#answer').append('<div class="answer">' + data + '</div>');

        }

    });
}

