(function c2bdistroLoader($) {
  Drupal.behaviors.c2bdistroLoader = {
    attach(context) {
      if (($(context).is(document)) || (context === document)) {
        $('form').submit(() => {
          $('body').prepend('<div class="custom-loader"><div class="loader"><div></div><div></div></div></div>');
        });
      }
    },
  };
}(jQuery));
