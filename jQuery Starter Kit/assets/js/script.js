$(' .go').click(function() {
    $('.announcement').toggle();
});

$(' .red-circle').mouseenter(function() {
     $('.blue-square').fadeOut();
});

$(' .red-circle').mouseleave(function() {
     $('.blue-square').fadeIn();
});

$(' .hello').click(function() {
  $('p').toggle();
});