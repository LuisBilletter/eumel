$('#turn').on('click', function(){
  var angle = ($('#image').data('angle') + 90) || 90;
  $('#image').css({'transform': 'rotate(' + angle + 'deg)'});
  $('#image').data('angle', angle);
});

$('#btn3').toggle(function() {
  $(this).rotate({ endDeg:-90, persist:true });
}, function() {
  $(this).rotate({ endDeg:-45 });
});

