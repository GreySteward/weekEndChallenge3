$(document).ready(function() {
    $('#post-data').on('click', clickPostData);
    $('#get-data').on('click', clickGetData);
    //button click events - need update clickPostData
    $('#post-one').on('click', clickPostData);
    $('#post-two').on('click', clickPostData);
    $('#post-three').on('click', clickPostData);
    $('#post-four').on('click', clickPostData);
    $('#post-five').on('click', clickPostData);
    $('#post-six').on('click', clickPostData);
    $('#post-seven').on('click', clickPostData);
    $('#post-eight').on('click', clickPostData);
    $('#post-nine').on('click', clickPostData);
    $('#post-zero').on('click', clickPostData);

    $('#post-sum').on('click', clickPostData);
    $('#post-sub').on('click', clickPostData);
    $('#post-multi').on('click', clickPostData);
    $('#post-diff').on('click', clickPostData);

    $('#get-equals').on('click', clickPostData);
    $('#get-clear').on('click', clickPostData);

});



function clickPostData() {
    event.preventDefault();
    var values = {};
    $.each($('#post-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    $('#post-form').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/data',
        data: values,
        beforeSend: function() {
            console.log('before!');
        },
        success: function(data) {
            console.log('From Server: ', data);
            console.log(data);
        }
    });


}

function clickGetData() {
    event.preventDefault();
    $.ajax({
        type: 'GET',
        url: '/data',
        success: function(data) {
            console.log(data);
        }
    });
}