(function shareButton(document, Drupal, $) {
  /**
   * Share Button
   * Setup and attach the Share link behaviors.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.shareButton = {
    attach(context) {
      if ($(context).is(document)) {
        $('.share-button img').on('click', () => {
          $('#linksDropdown').toggleClass('share-links-open');
        });
      }
    },
  };
}(document, Drupal, jQuery));
