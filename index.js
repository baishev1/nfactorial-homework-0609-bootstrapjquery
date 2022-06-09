$('document').ready(function(){
    var name;
    var character;
    var adverb;
    var adjective;
    $('.name-input').on('keyup', 'input', function(){
        name = $(this).val();
    })
    $('.character-input').on('keyup', 'input', function(){
        character = $(this).val();
    })
    $('.adverb-input').on('keyup', 'input', function(){
        adverb = $(this).val();
    })
    $('.adjective-input').on('keyup', 'input', function(){
        adjective = $(this).val();   
    })
    $('.button').on('click', function(){
        var ptext = '<p class="ptext">One day, my friend <span class="colortext"><b>' 
        + name + '</b></span> was visiting New York and ran into <span class="colortext"><b>' 
        + character + '</b></span>.<span class="colortext"><b>' 
        + name + '</b></span> ran <span class="colortext"><b>' 
        + adverb + '</b></span> to meet <span class="colortext"><b>' 
        + character + '</b></span>.But <span class="colortext"><b>' 
        + character + '</b></span> turned out to be very <span class="colortext"><b>' 
        + adjective + '</b></span> and <span class="colortext"><b>' 
        + name + '</b></span> did not enjoy the meeting.<span class="colortext"><b>';
        $('.story').append(ptext);
        $('.story').toggle();
    })
})