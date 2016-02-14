$(document).ready(function() {
    $('#input1').on('click', clickInput1);
    $('#input2').on('click', clickInput2);
    //button click events 10 key - need update clickPostData
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
//button click - operators- need update clickPostData
    $('#post-sum').on('click', clickPostData);
    $('#post-sub').on('click', clickPostData);
    $('#post-multi').on('click', clickPostData);
    $('#post-diff').on('click', clickPostData);
//button click - equals and clear- need update clickPostData
    $('#get-equals').on('click', clickPostData);
    $('#get-clear').on('click', clickPostData);

});

function clickInput1() {
    event.preventDefault();
    var values = {};

    $.each($('#name-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });
    //console.log(values);
    //console.log(nameArray);

    $('#post-name').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/name',
        data: values,
        beforeSend: function() {
            //console.log('before!');
        },
        success: function(data) {
            //console.log('From Server: ', data);
            console.log(data);
            $('#ajax-names').children().remove();
            data.forEach(function(person, i){

                $('#ajax-names').append('<div class="name">' + data[i].name + '</div>');
                $('#name-form').find('input[type=text]').val('');
            });
        }
    });
}
;//input field1 event handler
function clickInput2() {
    event.preventDefault();
    var values = {};

    $.each($('#animal-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    $('#post-animal').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/animal',
        data: values,
        beforeSend: function() {
            //console.log('before!');
        },
        success: function(data) {
            //console.log('From Server: ', data);
            //console.log(data);
            $('#ajax-animals').children().remove();
            data.forEach(function(person, i){

                $('#ajax-animals').append('<div class="animal">' + data[i].spiritAnimal + '</div>');
                $('#animal-form').find('input[type=text]').val('');
            });
        }
    });
}
//equals button combine field click event handler
function clickCombine() {
    event.preventDefault();

    $.ajax({
        type: 'GET',
        url: '/combine',

        //beforeSend: function() {
        //    //console.log('before!');
        //},
        success: function(data) {
            console.log('From Server: ', data);
            //console.log(data);
            //data
            $('#ajax-pairs').children().remove();
            $('#ajax-pairs').append('<div class="pair">' + data + '</div>');
        }
    });
}

//need Post type function- for 10 key-Operator functions

//function clickPostData() {
//    event.preventDefault();
//    var values = {};
//    $.each($('#post-form').serializeArray(), function(i, field) {
//        values[field.name] = field.value;
//    });
//
//    $('#post-form').find('input[type=text]').val('');
//
//    $.ajax({
//        type: 'POST',
//        url: '/data',
//        data: values,
//        beforeSend: function() {
//            console.log('before!');
//        },
//        success: function(data) {
//            console.log('From Server: ', data);
//            console.log(data);
//        }
//    });
//
//
//}
////need get type function for -Equals-Clear
//function clickGetData() {
//    event.preventDefault();
//    $.ajax({
//        type: 'GET',
//        url: '/data',
//        success: function(data) {
//            console.log(data);
//        }
//    });
}