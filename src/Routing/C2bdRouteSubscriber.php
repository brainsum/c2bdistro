<?php

namespace Drupal\c2bdistro\Routing;

use Drupal\Core\Routing\RouteSubscriberBase;
use Symfony\Component\Routing\RouteCollection;

/**
 * Subscriber for routes.
 */
class C2bdRouteSubscriber extends RouteSubscriberBase {

  /**
   * {@inheritdoc}
   */
  protected function alterRoutes(RouteCollection $collection) {
    // Access to 'Structure' route.
    if ($route = $collection->get('system.admin_structure')) {
      $route->setRequirements([
        '_permission' => 'access taxonomy overview',
      ]);
    }
  }

}
