console.log(jQuery().jquery);
$('#subscription_form').on('submit', function (e) {
  e.preventDefault();
  var $form = $(this);
  $.ajax({
    type: 'POST',
    url: './subscription_ajax.php',
    data: $form.serialize()
  }).done(function () {
    $form[0].reset()
    alert('Thank you for the subscription!')
  }).fail(function () {
    alert('Something went wrong')
  });
});

var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

