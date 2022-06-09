$('document').ready(function(){
    var width;
    var height;
    var number;
    var size;
    $('.width-input').on('keyup', 'input', function(){
        width = $(this).val();
    })
    $('.height-input').on('keyup', 'input', function(){
        height = $(this).val();
    })
    $('.number-input').on('keyup', 'input', function(){
        number = $(this).val();
    })
    $('.button').on('click', function(){
        size = width * height * number / 1024;
        var ptext = '<p class="ptext"><span class="colortext"><b>File is ' 
        + size + 'KB which is OK</b></span></p>';
        console.log(size);
        $('.story').prepend(ptext);
        $('.story').toggle();
    })
})