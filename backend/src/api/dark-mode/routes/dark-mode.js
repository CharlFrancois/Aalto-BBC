'use strict';

/**
 * dark-mode router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dark-mode.dark-mode');
