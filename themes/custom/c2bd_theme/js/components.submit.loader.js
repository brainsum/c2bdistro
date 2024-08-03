(function c2bdistroLoader($) {
  Drupal.behaviors.c2bdistroLoader = {
    attach: function attach(context) {
      if ($(context).is(document) || context === document) {
        $('form').submit(function () {
          $('body').prepend('<div class="custom-loader"><div class="loader"><div></div><div></div></div></div>');
        });
      }
    }
  };
})(jQuery);
