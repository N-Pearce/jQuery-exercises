// 1
$(document).ready(() => console.log("Let's get ready to party with jQuery!"));

// 2
$('img').addClass('image-center');

// 3
$('p').last().remove();

// 4
$('#title').css('font-size', function(){
    return Math.random() * 101;
})

// 5
$('ol li').last().after('<li>Yay puppies!</li>')

// 6
$('ol li').remove();
$('ol').append("<p>I apologize for the list :(</p>")

// 7
$('input').on('change', function(){
    const $rgb = $('input').parent();
    let $r = $rgb.children().eq(0).val();
    // laid out as red, blue, green in html, instead of rgb
    let $g = $rgb.children().eq(2).val();
    let $b = $rgb.children().eq(1).val();
    $('body').css('background-color', `rgb(${$r}, ${$g}, ${$b}`)
})

// 8
$('img').on('click', function() {$(this).remove()});