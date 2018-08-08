(function ($) {
  $.fn.emailValidator = function() {
    $('[name="email"]').keypress(function() {
      const regexValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const result = regexValidate.test(this.value)
      if (result) {
        $('#message').text('Email valid').css('color', "green")
        $('input').css('border-color', "green")
      } else {
        $('#message').text('Email not valid').css('color', "red")
        $('input').css('border-color', "red")
      }
    })

  }
})(jQuery)